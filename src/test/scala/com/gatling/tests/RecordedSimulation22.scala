package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation22 extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36")

	val headers_0 = Map(
		"Cache-Control" -> "max-age=0",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "none",
		"Sec-Fetch-User" -> "?1",
		"sec-ch-ua" -> """(Not(A:Brand";v="8", "Chromium";v="99", "Google Chrome";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "Windows")

	val headers_1 = Map(
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"sec-ch-ua" -> """(Not(A:Brand";v="8", "Chromium";v="99", "Google Chrome";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "Windows")

	val headers_3 = Map(
		"Cache-Control" -> "max-age=0",
		"Origin" -> "https://computer-database.gatling.io",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"sec-ch-ua" -> """(Not(A:Brand";v="8", "Chromium";v="99", "Google Chrome";v="99""",
		"sec-ch-ua-mobile" -> "?0",
		"sec-ch-ua-platform" -> "Windows")



	val scn = scenario("RecordedSimulation22")
		.exec(http("request_0")
			.get("/computers")
			.headers(headers_0))
		.pause(15)
		.exec(http("request_1")
			.get("/computers?f=ace")
			.headers(headers_1))
		.pause(2)
		.exec(http("request_2")
			.get("/computers/381")
			.headers(headers_1))
		.pause(7)
		.exec(http("request_3")
			.post("/computers/381")
			.headers(headers_3)
			.formParam("name", "ACE")
			.formParam("introduced", "")
			.formParam("discontinued", "")
			.formParam("company", "2"))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}