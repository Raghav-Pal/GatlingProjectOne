package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Mobile Safari/537.36")

	val scn = scenario("RecordedSimulation")
		.exec(http("ComputersDatabasePage")
			.get("/computers"))
		.pause(4)
		.exec(http("NewComputersPage")
			.get("/computers/new"))
		.pause(2)
		.exec(http("CreateNewComputer")
			.post("/computers")
			.formParam("name", "MyComputer1")
			.formParam("introduced", "2010-12-10")
			.formParam("discontinued", "2021-12-20")
			.formParam("company", "1"))
		.pause(1)
		.exec(http("FilterComputer")
			.get("/computers?f=MyComputer"))
		.pause(1)
		.exec(http("SelectFirstComputer")
			.get("/computers?f=Ace")
			.check(regex("""<a href="\/computers\/([0-9].*)+">ACE</a>""").exists.saveAs(key="result1")))
		.pause(3)
		.exec(http("GetComputerDetails")
			.get("/computers/${result1}"))
		.pause(2)
		.exec(http("DeleteComputer")
			.post("/computers/${result1}/delete"))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}