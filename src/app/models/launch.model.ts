class Links {
    presskit!: string | null;
  }
  
  class Rocket {
    rocket_name!: string;
  }
  
  export class Launch {
    flight_number!: number;
    launch_year!: string;
    rocket!: Rocket;
    details!: string;
    links!: Links;
  }