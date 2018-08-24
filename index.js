
class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf(endDate) {
        return new Date(endDate, 1, 1).getYear() - this.startDate.getYear() -1
       
    }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    blocksTravelled(){
        let horizontal = eastWest.indexOf(this.endingLocation["horizontal"]) - eastWest.indexOf(this.beginningLocation["horizontal"])
        let vertical = this.endingLocation["vertical"] - this.beginningLocation["vertical"]
        return horizontal + vertical
    }
    estimatedTime(peak){
        if (peak){
            return Math.round(this.blocksTravelled()/2);
        }
        else {
            return Math.round(this.blocksTravelled()/ 3);
        }
    }
}