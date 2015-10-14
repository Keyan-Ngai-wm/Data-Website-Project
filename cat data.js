google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['What happened to the cats', 'how many cats',],
        ['Adopted', 105],
        ['Deceased', 1],
        ['Humanely euthanized', 33],
        ['Transferred', 281],
        ['Returned to Owner', 27]
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