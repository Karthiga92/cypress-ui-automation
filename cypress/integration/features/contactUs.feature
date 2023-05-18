@ContactUs
Feature:Contact Us

    @TC-01
    Scenario Outline: Contact founder and lightning
        Given the user is on Founder and Lightning contact page
        When the user enters the mandatory details in the contact page
        And the user selects "<howdidYouHearAboutUs>" from How did you hear about us drop-down
        And the user clicks on send message button
        Then the message "Thank you for your message. We'll get back to you as soon as possible." should be displayed

        Examples:
            | howdidYouHearAboutUs |
            | Referral             |
            | Word of mouth        |
            | Event                |
            | Article              |
            | Facebook             |
            | Twitter              |
            | Instagram            |
            | LinkedIn             |
            | Job board            |
            | Other                |
            | Clubhouse            |
