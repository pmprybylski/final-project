// Get Data
d3.json('data/viewforboroughchart.json').then(incidentdata => {
      console.log(incidentdata)

// Declare variables for data
      var brooklyn = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "BROOKLYN").length
      var queens = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "QUEENS").length
      var manhatten = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "MANHATTAN").length
      var bronx = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "BRONX").length
      var richstaten = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "RICHMOND / STATEN ISLAND").length

 
// Generate doughnut chart using Chart.js
      var ctx = document.getElementById('donughtchart')
      var donughtchart = new Chart(ctx, {
            type: 'doughnut',
            data:  {
                  labels: ['Brooklyn','Queens', 'Manhattan', 'Bronx', 'Richmond/Staten Island'],
                  datasets: [{
                        data: [brooklyn, queens, manhatten, bronx, richstaten],
                        backgroundColor: [
                              '#225ea8',
                              '#1d91c0',
                              '#41b6c4',
                              '#7fcdbb',
                              '#c7e9b4',
                        ],
                  }],
                  
            }
        })
    })

// Get data
    d3.json('data/viewforboroughchart.json').then(incidentdata => {
        console.log(incidentdata)

// Declare variables for data
      var richstatennotstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "RICHMOND / STATEN ISLAND").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "NonStructural Fires").length
      var bronxnnotstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "BRONX").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "NonStructural Fires").length
      var manhattennnotstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "MANHATTAN").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "NonStructural Fires").length
      var queensnotstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "QUEENS").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "NonStructural Fires").length
      var brooklynnotstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "BROOKLYN").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "NonStructural Fires").length
       var richstatenstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "RICHMOND / STATEN ISLAND").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "Structural Fires").length    
      var bronxnstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "BRONX").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "Structural Fires").length
      var manhattennstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "MANHATTAN").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "Structural Fires").length
      var queensstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "QUEENS").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "Structural Fires").length
      var brooklynstructure = incidentdata.filter(incident => incident.INCIDENT_BOROUGH== "BROOKLYN").filter
      (incident => incident.INCIDENT_CLASSIFICATION_GROUP== "Structural Fires").length

// Generate stacked bar chart using Chart.js
      var ctx = document.getElementById('barchart')
      var barchart = new Chart(ctx, {
            type: 'bar',
            data: {
                  labels: ['Brooklyn','Queens', 'Manhattan', 'Bronx', 'Richmond/Staten Island'],
                  datasets: [{
                      label: 'Structrual',
                        data: [brooklynstructure, queensstructure, manhattennstructure, bronxnstructure , richstatenstructure],
                        backgroundColor: [
                              '#1d91c0',
                              '#1d91c0',
                              '#1d91c0',
                              '#1d91c0',
                              '#1d91c0'
                            ],

                      borderColor: [
                        '#41b6c4',
                        '#41b6c4',
                        '#41b6c4',
                        '#41b6c4',
                        '#41b6c4'
                      ],
                      borderWidth: 2
                    },
                    {
                      label: 'NonStructural',
                      data: [brooklynnotstructure, queensnotstructure, manhattennnotstructure, bronxnnotstructure, richstatennotstructure],
                      backgroundColor: [
                        '#7fcdbb',
                        '#7fcdbb',
                        '#7fcdbb',
                        '#7fcdbb',
                        '#7fcdbb'
                      ],
                      borderColor: [
                        '#c7e9b4',
                        '#c7e9b4',
                        '#c7e9b4',
                        '#c7e9b4',
                        '#c7e9b4'
                      ],
                      borderWidth: 2
                    }
                  ]
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [{
                      stacked: true,
                      ticks: {
                        beginAtZero: true
                      }
                    }],
                    xAxes: [{
                      stacked: true,
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }
            });
        })



      

