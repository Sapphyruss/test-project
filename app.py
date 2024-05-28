from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Enum
from datetime import datetime, timedelta
import jwt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://learnxcel_user:pwd@localhost:3306/learnxcel'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Enums
class UsersRoleEnum(Enum):
    admin = 'admin'
    instructor = 'instructor'
    student = 'student'

class QuestionsQuestionTypeEnum(Enum):
    multiple_choice = 'multiple_choice'
    true_false = 'true_false'
    short_answer = 'short_answer'
    
# Models
class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    role = db.Column(db.Enum(UsersRoleEnum), nullable=False)
    registration_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    course_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.TEXT)
    instructor_id = db.Column(db.Integer, db.ForeignKey('instructor.instructor_id'))
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)
    instructor = relationship('Instructor', back_populates='courses')

class Lesson(db.Model):
    lesson_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.course_id'))
    lesson_name = db.Column(db.String(100), nullable=False)
    content = db.Column(db.TEXT)
    order_index = db.Column(db.Integer)
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

class Quiz(db.Model):
    quiz_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lesson.lesson_id'))
    quiz_name = db.Column(db.String(100), nullable=False)
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

class Question(db.Model):
    question_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.quiz_id'))
    question_text = db.Column(db.TEXT, nullable=False)
    question_type = db.Column(db.Enum(QuestionsQuestionTypeEnum), nullable=False)
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

class Option(db.Model):
    option_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    question_id = db.Column(db.Integer, db.ForeignKey('question.question_id'))
    option_text = db.Column(db.String(255), nullable=False)
    is_correct = db.Column(db.Boolean, nullable=False, default=False)

class UserProgress(db.Model):
    progress_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))
    course_id = db.Column(db.Integer, db.ForeignKey('course.course_id'))
    lesson_id = db.Column(db.Integer, db.ForeignKey('lesson.lesson_id'))
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.quiz_id'))
    score = db.Column(db.DECIMAL(5, 2))
    completed = db.Column(db.Boolean, nullable=False, default=False)
    completion_date = db.Column(db.TIMESTAMP)

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

# User Authentication
@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    # Invalid input
    if not all([username, password, email]):
        return jsonify({'error': 'Missing fields'}), 400

    # Username or email already exists
    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Username already exists'}), 409
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists'}), 409

    # Create new user
    user = User(username=username, password=password, email=email)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login_user():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Invalid input
    if not all([username, password]):
        return jsonify({'error': 'Missing fields'}), 400

    # Check if user exists
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({'error': 'Invalid username or password'}), 401

    # Check password
    if not user.check_password(password):
        return jsonify({'error': 'Invalid username or password'}), 401

    # Create JWT token
    token = jwt.encode({'username': username, 'exp': datetime.utcnow() + timedelta(days=1)}, app.config['SECRET_KEY'])

    return jsonify({'token': token.decode('UTF-8')}), 200
    
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
