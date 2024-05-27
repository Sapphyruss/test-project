import unittest
import json
from app import app, db, User, Course, Instructor

class TestApp(unittest.TestCase):

    # create and destroy the database
    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'learnxcel:///:memory:'
        self.app = app.test_client()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    # create a user
    def create_user(self, username, email, password, is_admin=False):
        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return user

    # create an instructor
    def create_instructor(self, name, email):
        instructor = Instructor(name=name, email=email)
        db.session.add(instructor)
        db.session.commit()
        return instructor

    # create a course
    def create_course(self, title, description, instructor_id):
        course = Course(title=title, description=description, instructor_id=instructor_id)
        db.session.add(course)
        db.session.commit()
        return course

    # Test GET /users 
    def test_get_users(self):
        # Create some users
        self.create_user('user1', 'user1@example.com', 'password1')
        self.create_user('user2', 'user2@example.com', 'password2')
        response = self.app.get('/users')
        data = json.loads(response.data.decode())
        self.assertEqual(len(data), 2)
        self.assertEqual(response.status_code, 200)

    # Test POST /users 
    def test_create_user(self):
        response = self.app.post('/users', json={'username': 'newuser', 'email': 'newuser@example.com', 'password': 'password'})
        self.assertEqual(response.status_code, 201)

    # Test GET /users/<user_id> 
    def test_get_user(self):
        user = self.create_user('testuser', 'testuser@example.com', 'password')
        response = self.app.get(f'/users/{user.id}')
        data = json.loads(response.data.decode())
        self.assertEqual(data['username'], 'testuser')
        self.assertEqual(response.status_code, 200)

    # Test PUT /users/<user_id> 
    def test_update_user(self):
        user = self.create_user('testuser', 'testuser@example.com', 'password')
        response = self.app.put(f'/users/{user.id}', json={'username': 'updateduser', 'email': 'updateduser@example.com'})
        self.assertEqual(response.status_code, 200)
        updated_user = User.query.get(user.id)
        self.assertEqual(updated_user.username, 'updateduser')
        self.assertEqual(updated_user.email, 'updateduser@example.com')

    # Test DELETE /users/<user_id> 
    def test_delete_user(self):
        user = self.create_user('testuser', 'testuser@example.com', 'password')
        response = self.app.delete(f'/users/{user.id}')
        self.assertEqual(response.status_code, 200)
        deleted_user = User.query.get(user.id)
        self.assertIsNone(deleted_user)

    # Test GET /courses 
    def test_get_courses(self):
        instructor = self.create_instructor('John Doe', 'john@example.com')
        self.create_course('Course 1', 'Description 1', instructor.id)
        self.create_course('Course 2', 'Description 2', instructor.id)
        response = self.app.get('/courses')
        data = json.loads(response.data.decode())
        self.assertEqual(len(data), 2)
        self.assertEqual(response.status_code, 200)

    # Test POST /courses 
    def test_create_course(self):
        instructor = self.create_instructor('John Doe', 'john@example.com')
        response = self.app.post('/courses', json={'title': 'New Course', 'description': 'New Description', 'instructor_id': instructor.id})
        self.assertEqual(response.status_code, 201)

    # Test error handling user
    def test_get_non_existent_user(self):
        response = self.app.get('/users/999')
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.data.decode())
        self.assertEqual(data['error'], 'User not found')

    # Test error handling route
    def test_non_existent_route(self):
        response = self.app.get('/non-existent')
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.data.decode())
        self.assertEqual(data['error'], 'Not found')

if __name__ == '__main__':
    unittest.main()

