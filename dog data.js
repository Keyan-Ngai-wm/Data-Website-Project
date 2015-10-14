google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['What happened to the dogs', 'how many dogs',],
        ['Adopted', 332],
        ['Deceased', 4],
        ['Humanely euthanized', 34],
        ['Transferred', 191],
        ['Returned to Owner', 225]
    ]);

    var options = {
        title: 'April Shelter Status',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total',
            minValue: 0
        },
        vAxis: {
            title: 'What happened'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}