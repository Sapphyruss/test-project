from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://learnxcel_user:pwd@localhost:3306/learnxcel'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Models
class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<User {self.username}>'

class Course(db.Model):
    __tablename__ = 'Course'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    instructor_id = db.Column(db.Integer, db.ForeignKey('Instructor.id'), nullable=False)
    instructor = db.relationship('Instructor', back_populates='courses')

    def __repr__(self):
        return f'<Course {self.title}>'

class Instructor(db.Model):
    __tablename__ = 'Instructor'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    courses = db.relationship('Course', back_populates='instructor')

    def __repr__(self):
        return f'<Instructor {self.name}>'

# Routes
@app.route('/')
def home():
    return "Welcome to LearnXcel!"

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    result = [{'id': user.id, 'username': user.username, 'email': user.email, 'is_admin': user.is_admin} for user in users]
    return jsonify(result)

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if not all([username, email, password]):
        return jsonify({'error': 'Username, email, and password are required'}), 400
    try:
        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Email already exists'}), 409
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({'id': user.id, 'username': user.username, 'email': user.email, 'is_admin': user.is_admin})

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    data = request.json
    username = data.get('username')
    email = data.get('email')
    if not all([username, email]):
        return jsonify({'error': 'Username and email are required'}), 400
    user.username = username
    user.email = email
    try:
        db.session.commit()
        return jsonify({'message': 'User updated successfully'})
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Email already exists'}), 409
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})

@app.route('/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    result = [{'id': course.id, 'title': course.title, 'description': course.description, 'instructor_id': course.instructor_id} for course in courses]
    return jsonify(result)

@app.route('/courses', methods=['POST'])
def create_course():
    data = request.json
    title = data.get('title')
    description = data.get('description')
    instructor_id = data.get('instructor_id')
    if not all([title, instructor_id]):
        return jsonify({'error': 'Title and instructor ID are required'}), 400
    try:
        course = Course(title=title, description=description, instructor_id=instructor_id)
        db.session.add(course)
        db.session.commit()
        return jsonify({'message': 'Course created successfully'}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Instructor not found'}), 404
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/test_db_connection', methods=['GET'])
def test_db_connection():
    try:
        user = User.query.first()
        if user:
            return jsonify({'message': 'Database connection successful'})
        else:
            return jsonify({'error': 'No records found in the User table'}), 500
    except Exception as e:
        return jsonify({'error': 'Database connection error', 'details': str(e)}), 500

# Error Handlers
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == "__main__":
    # Initialize a database
    with app.app_context():
        db.create_all()
    app.run(debug=True)

