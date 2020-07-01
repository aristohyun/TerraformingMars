class playerBoard{
	construct(){
		this.MC;
		this.Steel;
		this.Titanium;
		this.Plants;
		this.Energy;
		this.heat;
		
		this.MCProduction;
		this.SteelProduction;
		this.TitaniumProduction;
		this.PlantsProduction;
		this.EnergyProduction;
		this.heatProduction;
	}
}
class Card{
	construct(){
this.tag;//Building,Space,Power,Science,Jovian,Earth,Plant,Microbe,Animal,City,Event
		this.name;
	}
	getName(){
		return this.name;
	}
}
class projectCard extends Card{
	construct(){
		this.name;
		this.color;
		this.Requirements;
		this.Cost;
this.tag;//Building,Space,Power,Science,Jovian,Earth,Plant,Microbe,Animal,City,Event
		this.VP;
	}
	//Effect / action / Immediate
}
class preludeCard extends Card{
		construct(){
		this.name;
this.tag;//Building,Space,Power,Science,Jovian,Earth,Plant,Microbe,Animal,City,Event
	}
}
class corporationCard extends Card{
	
}

class player{
	construct(){
		this.color;
		this.TR;
		this.playerCard;
		this.playerBoard;
		this.hand;
	}
	//Play a card from your hand
	//Use a standard project
	//Claim a milestone
	//Fund an award
	//Use the action on a blue card
	//Convert plants into greenery
	//Convert heat into temperature

}