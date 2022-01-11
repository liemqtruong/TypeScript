abstract class Pizza{
    protected _name : string
    protected _dough: string
    protected _sauce: string
    public prepare(): void{
        console.log("Preparing pizza with:" + this._name + ", " + this._dough + ", " + this._name)
    }
    public bake(): void{
        console.log("Baking")
    }

    public cut(): void{
        console.log("Cutting")
    }

    public box(): void{
        console.log("Boxing")
    }

    public getName(): string{
        return this._name
    }
}

class NYPizza extends Pizza{
    public constructor(){
        super()
        this._name = "NY Pizza"
        this._dough = "Thin Crust dough"
        this._sauce = "Marina Sauce"
    }
}

abstract class PizzaStore{
    public orderPizza(item: string): Pizza{
        var pizza : Pizza
        pizza = this.createPizza(item)
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    } 
	
	//Factory Method
    protected abstract createPizza(item: string): Pizza
}

class NYPizzaStore extends PizzaStore{
	
	//The subclass decides
    public createPizza(item: string): Pizza{
        return new NYPizza()
    }
}

var myStore = new NYPizzaStore
var myPizza = myStore.orderPizza("")
console.log(myPizza.getName())