# Public Sector Machine Learning

Machine learning is becoming more common in marketing, business, and medicine. The public sector can certainly benefit from this technology as well. Plenty of data already exists. When data is properly cleaned, machine learning can be applied to predict problems, target resources effectively, and protect lives and property. This project highlights the challenges and opportunities facing communities who use data to inform fire prevention and reduce fire burden. Like most data analytics projects, wrangling data was one of the main challenge. This project started with fire dispatch data from Jan. 1, 2018 to May 7, 2021 from [NYC Open Data](https://data.cityofnewyork.us/browse?q=fire+dispatch). As this project moved forward, it became clear that the machine learning tools required more diverse data points pertaining to fire risk. After the weighty task of cleaning this cumbersome dataset, this project required the collection and cleaning of NYC Open Data datasets on [housing maintenance code violations](https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5), [police complaints](https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i), [environmental control](https://data.cityofnewyork.us/Housing-Development/DOB-ECB-Violations/6bgk-3dad)  and [vacate orders](https://data.cityofnewyork.us/Housing-Development/Order-to-Repair-Vacate-Orders/tb8q-a3ar). In the end, this process proved to be challenging, but worth the effort in terms of shedding light on opportunities to improve public safety outcomes. 

# Datasets:

Fire Dispatch: <br>
[https://data.cityofnewyork.us/browse?q=fire+dispatch](https://data.cityofnewyork.us/browse?q=fire+dispatch)<br>

Housing Maintenance Code Violations:<br>
[https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5](https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5)<br>

Police Complaints:<br>
[https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i](https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i)<br>

Environmental Control Board:<br>
[https://data.cityofnewyork.us/Housing-Development/DOB-ECB-Violations/6bgk-3dad](https://data.cityofnewyork.us/Housing-Development/DOB-ECB-Violations/6bgk-3dad)<br>

Vacate Orders:<br>
[https://data.cityofnewyork.us/Housing-Development/Order-to-Repair-Vacate-Orders/tb8q-a3ar](https://data.cityofnewyork.us/Housing-Development/Order-to-Repair-Vacate-Orders/tb8q-a3ar)<br>

# Tools Used: 
Python Pandas<br>
SQL Database via Azure<br>
Flask<br>
Scikit-Learn<br>
JavaScript Leaflet<br>
HTML/CSS/Bootstrap<br>

# Process

### Database & Data Retrieval:
-Used Microsoft Azure SQL Server to host SQL database<br>
-Created tables from csv file imports<br>
-Created views for the data needed for maps and charts<br>
-Used Python Flask API to return JSON results for maps and charts<br>

### Dashboard:
-The dashboard is comprised of two pages. The basic overview of the project and a page for the machine learning analysis and visuals.<br>
-It includes a heatmap showing the various street alarm boxes and their frequency of use.<br> 
-The overview includes graphs of the incident types by borough and by borough and fire-type (structural or non-structural)<br>

### Machine Learning
-Used jupyter notebooks to process data for evaluation
-Used sklean, to create a Grid Search using train and test splitting
-Then applied a random forest algorithm to cross-validate and evaluate correlation and prediction accuracy



# Contributors
Pamela Prybylski</strong><br>
LinkedIn : [https://www.linkedin.com/in/pmprybylski/](https://www.linkedin.com/in/pmprybylski/)<br>

Keri Hennenfent</strong><br>

Kristy Allred</strong><br>
LinkedIn : [https://www.linkedin.com/in/kristy-allred-7410a51b8/](https://www.linkedin.com/in/kristy-allred-7410a51b8/)<br>

Hope Neely</strong><br>
LinkedIn : [https://www.linkedin.com/in/hopeneely/](https://www.linkedin.com/in/hopeneely/)
