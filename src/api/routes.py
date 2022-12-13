import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import requests
import datetime
import json
import jsonpickle

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def handle_register():
    body = request.json  # get the request body content
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    password = request.json.get('password')
    print(email, first_name, last_name, password)
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email', 400
    if not first_name:
        return 'You need to enter an first_name', 400
    if not last_name:
        return 'You need to enter an last_name', 400
    if not password:
        return 'You need to enter a password', 400
    # check_user = User.query.filter_by(email=email)
    check_user = User.query.filter_by(email=email).first()
    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }), 409
    user = User(email=email, first_name=first_name,
                last_name=last_name, password=password, is_active=True)
    db.session.add(user)
    db.session.commit()
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': user.serialize()
    }
    return jsonify(payload), 200


@api.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    users_array = [user.serialize() for user in users]
    return jsonify(users_array), 200


@api.route('/mealplanner', methods=['POST'])
def meal_planner():
    body = request.json
    mealplanner = Meal_planner(days_of_the_week=body["days_of_the_week"],
                               breakfast=body["breakfast"], lunch=body["lunch"], dinner=body["dinner"])
    db.session.add(mealplanner)
    db.session.commit()
    mealplanner_query = Meal_planner.query.all()
    all_mealplanner = list(map(lambda x: x.serialize(), mealplanner_query))

    return jsonify(all_mealplanner), 200


@api.route('/mealplanner', methods=['GET'])
def get_meal_planner():
    mealplanner_query = Meal_planner.query.all()
    all_mealplanner = list(map(lambda x: x.serialize(), mealplanner_query))

    return jsonify(all_mealplanner), 200


@api.route('/mealplanner', methods=['UPDATE'])
def update_meal_planner():
    body = request.json
    mealplanner = Meal_planner(days_of_the_week=body["days_of_the_week"],
                               breakfast=body["breakfast"], lunch=body["lunch"], dinner=body["dinner"])
    db.session.add(mealplanner)
    db.session.commit()
    mealplanner_query = Meal_planner.query.all()
    all_mealplanner = list(map(lambda x: x.serialize(), mealplanner_query))

    return jsonify(all_mealplanner), 200


@api.route('/mealplanner', methods=['DELETE'])
def delete_meal_planner():
    body = request.json
    mealplanner = Meal_planner(days_of_the_week=body["days_of_the_week"],
                               breakfast=body["breakfast"], lunch=body["lunch"], dinner=body["dinner"])
    db.session.add(mealplanner)
    db.session.commit()
    mealplanner_query = Meal_planner.query.all()
    all_mealplanner = list(map(lambda x: x.serialize(), mealplanner_query))

    return jsonify(all_mealplanner), 200


@api.route('/mealshop', methods=['POST'])
def meal_shop():
    body = request.json
    mealshop = Meal_shop(days_of_the_week=body["days_of_the_week"], healthyfat=body["healthyfat"], protein=body["protein"],
                         dairy=body["dairy"], grainscarbohydrates=body["grainscarbohydrates"], vegetables=body["vegetables"], fruits=body["fruits"])
    db.session.add(mealshop)
    db.session.commit()
    mealshop_query = Meal_shop.query.all()
    all_mealshop = list(map(lambda x: x.serialize(), mealshop_query))

    return jsonify(all_mealshop), 200
