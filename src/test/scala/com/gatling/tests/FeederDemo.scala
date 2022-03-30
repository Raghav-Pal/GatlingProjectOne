package test.scala.com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FeederDemo extends Simulation{

  // protocol
  val httpProtocol = http.baseUrl("https://computer-database.gatling.io")

  // scenario
  val feeder = csv("data/data1.csv").circular

  val scn = scenario("Feeders Demo")
    .repeat(1) {
      feed(feeder)
        .exec { session =>
          println("Name:  " + session("name").as[String])
          println("Job:  " + session("job").as[String])
          println("Page:  " + session("page").as[String])
          session
        }
        .pause(1)
        .exec(http("Goto ${page}")
        .get("/#{page}")
        )
    }

  // setup
  setUp(scn.inject(atOnceUsers(3))).protocols(httpProtocol)

}
