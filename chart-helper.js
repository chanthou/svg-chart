function scaleY(value, range){
  if(value >= range[range.length-1].value){ return range[range.length-1].y+10}

  for (var i = 1; i < range.length ; i++) {
  	if(value <= range[i].value){
  		max = range[i];
  		min = range[i-1];
  		break;
  	}
  };
  totalValue = max.value - min.value
  leftValue = value - min.value
  totalLength = max.y - min.y
  leftLength = (leftValue * totalLength)/totalValue
  return min.y-10 + leftLength;
}

function ratePointer(value, display, range){
var y = scaleY(value, range);
svg.append("text")
	.attr("x",65)
	.attr("y",y)
	.text(display);
svg.append("image")
	.attr({x:65, y:y, height:"20px", width:"20px", "xlink:href": "pointer.png"})
}


function verticalLetterText(y,text){
svg.append("text")
	.attr("x",20)
	.attr("y",y+10)
	.selectAll("tspan")
	  .data(text.split(""))
	.enter().append("tspan")
	  .attr("x", 20)
	  .attr("dy", "1.5em")
	  .text(function(d){return d;});
}

function drawLineRange(y,display){
svg.append("text")
	.attr("x",0)
	.attr("y",y)
	.text(display)

var line1 = svg.append("line")
  .attr("x1", 35)
  .attr("y1", y)
  .attr("x2", 85)
  .attr("y2", y)
  .attr("stroke-width", 1)
  .attr("stroke", "black");
}