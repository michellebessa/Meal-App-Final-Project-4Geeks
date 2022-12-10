"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Meal_planner, Meal_shop
from api.utils import generate_sitemap, APIException
from argon2 import PasswordHasher
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager

api = Blueprint('api', __name__)

ph = PasswordHasher()


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def handle_register():
    body = request.get_json()
    user = User(email=body["email"], password=ph.hash(
        body['password']), is_active=True)
    db.session.add(user)
    db.session.commit()

    success = "Successfully added"
    return jsonify(success)


@api.route('/login', methods=['POST'])
def handle_login():
    body = request.get_json()
    user = User.query.filter(User.email == body["email"]).first()
    if user is None:
        return "Failed auth email", 401
    # try:
    #     ph.verify(user.password, body["password"])
    # except:
    #     return "Failed auth password", 401
    token = create_access_token(identity=user.id)
    return jsonify({"token": token})


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
