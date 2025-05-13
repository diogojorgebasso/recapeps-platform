Feature: Quiz Progress by Subject

  As a quiz taker
  I want to see my progress per subject
  So that I know which topics to focus on

  Scenario: User sees initial progress
    Given I am on the quiz page
    When I start a new quiz with 2 Math and 1 History questions
    Then I should see a progress bar with 0% for Math and History

  Scenario: User answers a Math question
    Given I have answered 1 Math question out of 2
    Then the Math progress should be 50%
