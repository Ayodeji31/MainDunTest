package pageObject;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target"},
		features = "src/test/resource",
		glue={"stepDefinition"}
		
		)
public class RunnerTest {

}
