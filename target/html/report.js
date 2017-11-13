$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BBCRegister.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Aleva"
    }
  ],
  "line": 2,
  "name": "BBC Register New User",
  "description": "",
  "id": "bbc-register-new-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As User I want to create an Account",
  "description": "",
  "id": "bbc-register-new-user;as-user-i-want-to-create-an-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegisterWithBBC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Home Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Singin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type year \"\u003cbirthyear\u003e\" Of Birth Year",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"\u003cbirthmonth\u003e\" Of Birth Month",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type date \"\u003cbirthday\u003e\" Of Birth Day",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I type email \"\u003cemail\u003e\" in the email address fileld",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type postcode \"\u003cPostcode\u003e\" in the postcode filed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Gender \"\u003cgender\u003e\" in the gender field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click No, thanks on Want email updates about more things you\u0027ll love?",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that I am register successfully",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "# And I close the browser"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;",
  "rows": [
    {
      "cells": [
        "birthyear",
        "birthmonth",
        "birthday",
        "email",
        "Password",
        "Postcode",
        "gender"
      ],
      "line": 23,
      "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;1"
    },
    {
      "cells": [
        "1925",
        "05",
        "12",
        "james56@yahoo.com",
        "Monday\u00261",
        "E107LD",
        "female"
      ],
      "line": 24,
      "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;2"
    },
    {
      "cells": [
        "1963",
        "10",
        "31",
        "mary48@yahoo.com",
        "Monday\u00261",
        "DA26QF",
        "female"
      ],
      "line": 25,
      "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;3"
    },
    {
      "cells": [
        "1989",
        "11",
        "15",
        "mark5@yahoo.com",
        "Monday\u00261",
        "WD64QL",
        "male"
      ],
      "line": 26,
      "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;4"
    },
    {
      "cells": [
        "1973",
        "01",
        "20",
        "jones47@yahoo.com",
        "Monday\u00261",
        "RM95JR",
        "male"
      ],
      "line": 27,
      "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;5"
    },
    {
      "cells": [
        "1967",
        "12",
        "14",
        "heathway57@yahoo.com",
        "Monday\u00261",
        "RM176BW",
        "female"
      ],
      "line": 28,
      "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "As User I want to create an Account",
  "description": "",
  "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegisterWithBBC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Home Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Singin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type year \"1925\" Of Birth Year",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"05\" Of Birth Month",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type date \"12\" Of Birth Day",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I type email \"james56@yahoo.com\" in the email address fileld",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"Monday\u00261\" in the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type postcode \"E107LD\" in the postcode filed",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Gender \"female\" in the gender field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click No, thanks on Want email updates about more things you\u0027ll love?",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that I am register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_am_on_the_BBC_Home_Homepage()"
});
formatter.result({
  "duration": 206277046,
  "error_message": "java.lang.NullPointerException\r\n\tat step_Definitions.Register.i_am_on_the_BBC_Home_Homepage(Register.java:27)\r\n\tat ✽.Given I am on the BBC Home Homepage(BBCRegister.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.I_click_Singin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1925",
      "offset": 13
    }
  ],
  "location": "Register.i_type_year_Of_Birth_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 14
    }
  ],
  "location": "Register.i_type_month_Of_Birth_Month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 13
    }
  ],
  "location": "Register.i_type_date_Of_Birth_Day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_the_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "james56@yahoo.com",
      "offset": 14
    }
  ],
  "location": "Register.i_type_email_in_the_email_address_fileld(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday\u00261",
      "offset": 17
    }
  ],
  "location": "Register.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "E107LD",
      "offset": 17
    }
  ],
  "location": "Register.i_type_postcode_in_the_postcode_filed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 15
    }
  ],
  "location": "Register.i_type_Gender_in_the_gender_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_No_thanks_on_Want_email_updates_about_more_things_you_ll_love()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_verify_that_I_am_register_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "As User I want to create an Account",
  "description": "",
  "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegisterWithBBC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Home Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Singin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type year \"1963\" Of Birth Year",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"10\" Of Birth Month",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type date \"31\" Of Birth Day",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I type email \"mary48@yahoo.com\" in the email address fileld",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"Monday\u00261\" in the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type postcode \"DA26QF\" in the postcode filed",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Gender \"female\" in the gender field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click No, thanks on Want email updates about more things you\u0027ll love?",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that I am register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_am_on_the_BBC_Home_Homepage()"
});
formatter.result({
  "duration": 266147,
  "error_message": "java.lang.NullPointerException\r\n\tat step_Definitions.Register.i_am_on_the_BBC_Home_Homepage(Register.java:27)\r\n\tat ✽.Given I am on the BBC Home Homepage(BBCRegister.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.I_click_Singin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1963",
      "offset": 13
    }
  ],
  "location": "Register.i_type_year_Of_Birth_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "Register.i_type_month_Of_Birth_Month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "31",
      "offset": 13
    }
  ],
  "location": "Register.i_type_date_Of_Birth_Day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_the_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mary48@yahoo.com",
      "offset": 14
    }
  ],
  "location": "Register.i_type_email_in_the_email_address_fileld(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday\u00261",
      "offset": 17
    }
  ],
  "location": "Register.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DA26QF",
      "offset": 17
    }
  ],
  "location": "Register.i_type_postcode_in_the_postcode_filed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 15
    }
  ],
  "location": "Register.i_type_Gender_in_the_gender_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_No_thanks_on_Want_email_updates_about_more_things_you_ll_love()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_verify_that_I_am_register_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "As User I want to create an Account",
  "description": "",
  "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegisterWithBBC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Home Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Singin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type year \"1989\" Of Birth Year",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"11\" Of Birth Month",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type date \"15\" Of Birth Day",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I type email \"mark5@yahoo.com\" in the email address fileld",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"Monday\u00261\" in the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type postcode \"WD64QL\" in the postcode filed",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Gender \"male\" in the gender field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click No, thanks on Want email updates about more things you\u0027ll love?",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that I am register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_am_on_the_BBC_Home_Homepage()"
});
formatter.result({
  "duration": 264732,
  "error_message": "java.lang.NullPointerException\r\n\tat step_Definitions.Register.i_am_on_the_BBC_Home_Homepage(Register.java:27)\r\n\tat ✽.Given I am on the BBC Home Homepage(BBCRegister.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.I_click_Singin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1989",
      "offset": 13
    }
  ],
  "location": "Register.i_type_year_Of_Birth_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 14
    }
  ],
  "location": "Register.i_type_month_Of_Birth_Month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 13
    }
  ],
  "location": "Register.i_type_date_Of_Birth_Day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_the_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mark5@yahoo.com",
      "offset": 14
    }
  ],
  "location": "Register.i_type_email_in_the_email_address_fileld(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday\u00261",
      "offset": 17
    }
  ],
  "location": "Register.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WD64QL",
      "offset": 17
    }
  ],
  "location": "Register.i_type_postcode_in_the_postcode_filed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 15
    }
  ],
  "location": "Register.i_type_Gender_in_the_gender_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_No_thanks_on_Want_email_updates_about_more_things_you_ll_love()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_verify_that_I_am_register_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "As User I want to create an Account",
  "description": "",
  "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegisterWithBBC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Home Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Singin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type year \"1973\" Of Birth Year",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"01\" Of Birth Month",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type date \"20\" Of Birth Day",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I type email \"jones47@yahoo.com\" in the email address fileld",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"Monday\u00261\" in the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type postcode \"RM95JR\" in the postcode filed",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Gender \"male\" in the gender field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click No, thanks on Want email updates about more things you\u0027ll love?",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that I am register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_am_on_the_BBC_Home_Homepage()"
});
formatter.result({
  "duration": 394974,
  "error_message": "java.lang.NullPointerException\r\n\tat step_Definitions.Register.i_am_on_the_BBC_Home_Homepage(Register.java:27)\r\n\tat ✽.Given I am on the BBC Home Homepage(BBCRegister.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.I_click_Singin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1973",
      "offset": 13
    }
  ],
  "location": "Register.i_type_year_Of_Birth_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 14
    }
  ],
  "location": "Register.i_type_month_Of_Birth_Month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    }
  ],
  "location": "Register.i_type_date_Of_Birth_Day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_the_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jones47@yahoo.com",
      "offset": 14
    }
  ],
  "location": "Register.i_type_email_in_the_email_address_fileld(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday\u00261",
      "offset": 17
    }
  ],
  "location": "Register.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RM95JR",
      "offset": 17
    }
  ],
  "location": "Register.i_type_postcode_in_the_postcode_filed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 15
    }
  ],
  "location": "Register.i_type_Gender_in_the_gender_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_No_thanks_on_Want_email_updates_about_more_things_you_ll_love()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_verify_that_I_am_register_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "As User I want to create an Account",
  "description": "",
  "id": "bbc-register-new-user;as-user-i-want-to-create-an-account;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegisterWithBBC"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Home Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Singin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type year \"1967\" Of Birth Year",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"12\" Of Birth Month",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type date \"14\" Of Birth Day",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I type email \"heathway57@yahoo.com\" in the email address fileld",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"Monday\u00261\" in the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type postcode \"RM176BW\" in the postcode filed",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type Gender \"female\" in the gender field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click No, thanks on Want email updates about more things you\u0027ll love?",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that I am register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_am_on_the_BBC_Home_Homepage()"
});
formatter.result({
  "duration": 273580,
  "error_message": "java.lang.NullPointerException\r\n\tat step_Definitions.Register.i_am_on_the_BBC_Home_Homepage(Register.java:27)\r\n\tat ✽.Given I am on the BBC Home Homepage(BBCRegister.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.I_click_Singin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1967",
      "offset": 13
    }
  ],
  "location": "Register.i_type_year_Of_Birth_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 14
    }
  ],
  "location": "Register.i_type_month_Of_Birth_Month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 13
    }
  ],
  "location": "Register.i_type_date_Of_Birth_Day(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_the_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "heathway57@yahoo.com",
      "offset": 14
    }
  ],
  "location": "Register.i_type_email_in_the_email_address_fileld(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday\u00261",
      "offset": 17
    }
  ],
  "location": "Register.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RM176BW",
      "offset": 17
    }
  ],
  "location": "Register.i_type_postcode_in_the_postcode_filed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 15
    }
  ],
  "location": "Register.i_type_Gender_in_the_gender_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_No_thanks_on_Want_email_updates_about_more_things_you_ll_love()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_verify_that_I_am_register_successfully()"
});
formatter.result({
  "status": "skipped"
});
});