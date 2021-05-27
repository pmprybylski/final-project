
import sys
import os
from typing import ItemsView
from flask import Flask, render_template
from flask_restful import reqparse, Api, Resource
import json
import pyodbc
import json
import profile


# Initialize Flask
app = Flask(__name__)

# Setup Flask Restful framework
api = Api(app)
parser = reqparse.RequestParser()
parser.add_argument('cleanedfirecsv')
parser.add_argument('viewformap')
parser.add_argument('dobviolations')
parser.add_argument('nypdcomplaint')
parser.add_argument('ordertovacate')
parser.add_argument('housingcodeviolation')
parser.add_argument('viewforchart')
parser.add_argument('viewforchart2')
parser.add_argument('viewforboroughchart')




conn = pyodbc.connect(
    'DRIVER={SQL Server};'
    'SERVER=############;'
    'PORT=########;'
    'DATABASE=#############;'
    'UID=;'
    'PWD='
)



class CleanedFireCSV(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[cleaned_fire_dispatch_data3]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items

class ViewForMap(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[viewformap]"
        result = cursor.execute(query)
        mapitems = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return mapitems

class DobViolations(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[cleaned_dob_violations_data]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items

class NyPdComplaint(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[cleaned_nypd_complaint_data]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items

class OrderToVacate(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[cleaned_order_to_vacate_data]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items

class HousingCodeViolation(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[cleaned_housing_code_violation_data]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items

class ViewForChart(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[viewforchart]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items

class ViewForChart2(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[viewforchart2]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items

class ViewForBoroughChart(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[viewforboroughchart]"
        result = cursor.execute(query)
        items = [dict(zip([key[0] for key in cursor.description], row)) for row in result]
        return items


api.add_resource(CleanedFireCSV, '/cleanedfirecsv')
api.add_resource(ViewForMap, '/viewformap')
api.add_resource(DobViolations, '/dobviolations')
api.add_resource(NyPdComplaint, '/nypdcomplaint')
api.add_resource(OrderToVacate, '/ordertovacate')
api.add_resource(HousingCodeViolation, '/housingcodeviolation')
api.add_resource(ViewForChart, '/viewforchart')
api.add_resource(ViewForChart2, '/viewforchart2')
api.add_resource(ViewForBoroughChart, '/viewforboroughchart')





@app.route("/")
def index():
    return render_template("index.html")


# Start App
if __name__ == '__main__':
    app.run(debug=True)


