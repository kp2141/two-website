import React from "react"
import Card from "./Card"

const CardSection = () => {
    return(
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title = "LearnCodeOnline" buttonText = "My LCO App" randomText = "Coding is the fun exercise to do. It makes your mind working so fast and your vision also" imageurl = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
          <div className="col-4">
            <Card title = "ThriftStore" buttonText = "ThriftStore" randomText = "ThriftStore is the one of the best cheapest destinations tp buy second hand things for your home" imageurl = "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
          <div className="col-4">
            <Card title = "TajMahal" buttonText = "TajMahal" randomText = "Tajmahal is one of the seven wonders. It is beautiful in itself. It took more than 30 years to build" imageurl = "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
        </div>
      </div>
    </section>

    );
}

export default CardSection