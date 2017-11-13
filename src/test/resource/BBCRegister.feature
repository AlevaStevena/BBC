#Author: Aleva
Feature: BBC Register New User

  @RegisterWithBBC
  Scenario Outline: As User I want to create an Account
    Given I am on the BBC Home Homepage
    And I click Singin button
    And I click Register now
    And I type year "<birthyear>" Of Birth Year
    And I type month "<birthmonth>" Of Birth Month
    And I type date "<birthday>" Of Birth Day
    Then I click the Next button
    And I type email "<email>" in the email address fileld
    And I type password "<Password>" in the password field
    And I type postcode "<Postcode>" in the postcode filed
    And I type Gender "<gender>" in the gender field
    And I click No, thanks on Want email updates about more things you'll love?
    And I click Register button
    Then I verify that I am register successfully

    # And I close the browser
    Examples: 
      | birthyear | birthmonth | birthday | email                | Password | Postcode | gender |
      |      1925 |         05 |       12 | james56@yahoo.com    | Monday&1 | E107LD   | female |
      |      1963 |         10 |       31 | mary48@yahoo.com     | Monday&1 | DA26QF   | female |
      |      1989 |         11 |       15 | mark5@yahoo.com      | Monday&1 | WD64QL   | male   |
      |      1973 |         01 |       20 | jones47@yahoo.com    | Monday&1 | RM95JR   | male   |
      |      1967 |         12 |       14 | heathway57@yahoo.com | Monday&1 | RM176BW  | female |
