$(function () {
    var deptCAndS = dept_tsalary();
    var deptC_Qual = dept_qual_count_info();
    showDeptCAndS();
    showDeptQuali();

    var res = emp_qual_cntindept();
    console.log(res);

    initialize();

    function initialize() {

       // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawPieChart);
      google.charts.setOnLoadCallback(drawColumnChart);
       
        

    }


    function drawPieChart() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Qualification');
        data.addColumn('number', 'Total');
        rows = [];
        for (var i = 0; i < res.length; i++) {
            var ele = res[i];
            rows.push([ele.qual, ele.count])
        }
        data.addRows(rows);
        // Set chart options
        var options = {
            'title': 'Qualification and Count Details',
            'width': 400,
            'height': 300
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('deptempcountchart'));
        chart.draw(data, options);



    }

    function drawColumnChart() {
        
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawColColors);

function drawColColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Department');
      data.addColumn('number', 'Tsal');
      var rows=[];
        for (var i = 0; i < deptCAndS.length; i++) {
         
            var ele = deptCAndS[i];
            rows.push([ele.dname, parseInt(ele.tsal)])
        }
      data.addRows(rows);

      var options = {
        title: 'Department-wise Salary',
       
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('deptsalrychart'));
      chart.draw(data, options);
    }
        }

    

    function showDeptCAndS() {
        var headings = ["Department", "Count", "Salary"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
        data += "<thead><tr>";
        for (var i = 0; i < headings.length; i++) {
            data += "<th>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptCAndS.length; i++) {
            data += "<tr>";
            data += "<td>" + deptCAndS[i].dname + "</td>";
            data += "<td>" + deptCAndS[i].count + "</td>";
            data += "<td>" + deptCAndS[i].tsal + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptsctable").html(data);
    }

    function showDeptQuali() {
        var headings = ["Department", "Qualification", "Count"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
        data += "<thead><tr>";
        for (var i = 0; i < headings.length; i++) {
            data += "<th>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptC_Qual.length; i++) {
            data += "<tr>";
            data += "<td>" + deptC_Qual[i].dname + "</td>";
            data += "<td>" + deptC_Qual[i].qual + "</td>";
            data += "<td>" + deptC_Qual[i].count + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptqtable").html(data);
    }



});
