package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ComputerDatabase extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")

	val scn = scenario("ComputerDatabase")
		.exec(http("ComputersDatabasePage")
			.get("/computers"))
		.pause(1)
		.exec(http("NewComputersPage")
			.get("/computers/new")
			)
		.pause(1)
		.exec(http("CreateNewComputer")
			.post("/computers")

			.formParam("name", "MyComputer1")
			.formParam("introduced", "2010-01-01")
			.formParam("discontinued", "2020-01-01")
			.formParam("company", "2"))
		.pause(1)
		.exec(http("FilterComputer")
			.get("/computers?f=MyComputer1")
			)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}