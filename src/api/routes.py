"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Meal_planner
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/mealplanner', methods=['POST'])
def meal_planner():
    body = request.json
    mealplanner = Meal_planner(days_of_the_week = body["days_of_the_week"], breakfast=body["breakfast"], lunch=body["lunch"], dinner=body["dinner"])
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
    mealplanner = Meal_planner(days_of_the_week = body["days_of_the_week"], breakfast=body["breakfast"], lunch=body["lunch"], dinner=body["dinner"])
    db.session.add(mealplanner)
    db.session.commit()
    mealplanner_query = Meal_planner.query.all()
    all_mealplanner = list(map(lambda x: x.serialize(), mealplanner_query))

    return jsonify(all_mealplanner), 200

@api.route('/mealplanner', methods=['DELETE'])
def delete_meal_planner():
    body = request.json
    mealplanner = Meal_planner(days_of_the_week = body["days_of_the_week"], breakfast=body["breakfast"], lunch=body["lunch"], dinner=body["dinner"])
    db.session.add(mealplanner)
    db.session.commit()
    mealplanner_query = Meal_planner.query.all()
    all_mealplanner = list(map(lambda x: x.serialize(), mealplanner_query))

    return jsonify(all_mealplanner), 200    