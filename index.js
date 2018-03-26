//build first bar chart...
var data = [[2.55, 0], [13.4, 1]];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

barEnter.transition().duration(5000).style("width", function(d) {
  return d[0] * 20 + "px"; }).style("padding-right", "3px").attr("id", function(d) {
  	if (d[1] == 0) return "worldwar"; else return "recession";
  });

barEnter.text(function(d) { return d[0]; });

//build second bar chart...
data = [[2.22, 0], [14.7, 1]];
chart = d3.select(".chart1");
bar = chart.selectAll("div");
barUpdate = bar.data(data);
barEnter = barUpdate.enter().append("div");

barEnter.transition().duration(5000).style("width", function(d) {
  return d[0] * 20 + "px"; }).style("padding-right", "3px").attr("id", function(d) {
  	if (d[1] == 0) return "worldwar"; else return "recession";
  });

barEnter.text(function(d) { return d[0]; });

//build third bar chart...
data = [[467, 0], [1280, 1]];
chart = d3.select(".chart2");
bar = chart.selectAll("div");
barUpdate = bar.data(data);
barEnter = barUpdate.enter().append("div");

barEnter.transition().duration(5000).style("width", function(d) {
  return d[0] / 2 + "px"; }).style("padding-right", "3px").attr("id", function(d) {
  	if (d[1] == 0) return "worldwar"; else return "recession";
  });

barEnter.text(function(d) { return d[0]; });

//build fourth bar chart...
data = [[21, 0], [8.7, 1]];
chart = d3.select(".chart3");
bar = chart.selectAll("div");
barUpdate = bar.data(data);
barEnter = barUpdate.enter().append("div");

barEnter.transition().duration(5000).style("width", function(d) {
  return d[0] * 20 + "px"; }).style("padding-right", "3px").attr("id", function(d) {
  	if (d[1] == 0) return "worldwar"; else return "recession";
  });

barEnter.text(function(d) { return d[0] + "%"; });