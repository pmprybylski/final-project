
import sys
import os
from typing import ItemsView
from flask import Flask
from flask_restful import reqparse, Api, Resource
import json
import pyodbc
import json


# Initialize Flask
app = Flask(__name__)

# Setup Flask Restful framework
api = Api(app)
parser = reqparse.RequestParser()
parser.add_argument('cleanedfirecsv')
parser.add_argument('viewformap')

conn = pyodbc.connect(
    'DRIVER={SQL Server};'
    'SERVER=finalprojectdata.database.windows.net;'
    'PORT=1433;'
    'DATABASE=v2-project-data;'
    'UID=;'
    'PWD=;'
)


class CleanedFireCSV(Resource):
    def get(self):     
        cursor = conn.cursor()    
        query = "SELECT * FROM [dbo].[cleaned_fire_dispatch_data3] WHERE [INCIDENT_BOROUGH] LIKE '%BROOKLYN%'"
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


api.add_resource(CleanedFireCSV, '/cleanedfirecsv')
api.add_resource(ViewForMap, '/viewformap')


# Start App
if __name__ == '__main__':
    app.run()

