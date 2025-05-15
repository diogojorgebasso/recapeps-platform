Feature: See different colors for different subject skill levels
  As a user
  I want to see different colors for different skill levels
  So that I can easily identify my progress

  Background:
    Given I am logged as a user

  Scenario: User sees different colors for different skill levels
    Given I am on the skill tree page
    When I view the skill tree
    Then I should see different colors for each skill level
    And the colors should be consistent across the application

  Scenario: The user is doing again a quizz that he already done.
    Given I am on the skill tree page
    When I start a new quiz with 2 Math and 1 History questions
    Then I should see a progress bar with 0% for Math and History
    And the colors should be consistent across the application
