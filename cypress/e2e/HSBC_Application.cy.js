describe('HSBC_Application',()=>{
    it("HSBC_Login",()=>{
        //1. Open https://www.hsbc.co.in/
        cy.visit("https://www.hsbc.co.in/");
    
        //2. Validate HSBC Bank Logo
        cy.visit("https://www.hsbc.co.in/");
        cy.xpath("//div[@class='header-logo lg-2']").should("be.visible");
        
        //3. Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving and Deposit
        cy.visit("https://www.hsbc.co.in/");
        cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
   
        //4. Click on Login button
        cy.visit("https://www.hsbc.co.in/");
        cy.wait(3000)
        cy.contains('Log On').click();
        cy.wait(3000)
        cy.xpath("//span[contains(text(),'Continue to log on with browser')]").click()

        //5. Validate Log On header in Login page
        cy.xpath("//div[@class='primary-button header-login-button header-dropdown']")
        cy.wait(3000)

        //6. Check Continue button is available
        cy.get('.row')
        cy.wait(3000)

        //7. Also validate initially Continue button is disabled.
        cy.contains('Continue').should('be.visible').and('be.disabled')
        cy.wait(3000)
 
        //8. Type any random email in the username field
        cy.xpath('//*[@id="frmUsername"]/div[3]/div[1]').type('rmsekar@cisco.com');
        cy.wait(3000)

        //9. Now check Continue button is Enabled
        cy.contains('Continue').should('be.visible').and('be.enabled');
        cy.wait(3000)

        //10. Validate Remember me check box is not checked by default
        cy.xpath("//input[@id='rememberMe']").should('not.be.checked')
        cy.wait(3000)

       //11. Validate there is a question mark tooltip present on the page
       cy.xpath("//span[@class='icon icon-circle-help-solid help-icon']").should('be.visible')
       cy.wait(3000)

      //12. Click on the tooltip
      cy.xpath("//span[@class='icon icon-circle-help-solid help-icon']").click()
      cy.wait(3000)

      //13. Now validate the username header in the new pop-up screen
      cy.contains('Username').should('be.visible')
      cy.wait(3000)

      //14. Validate there is a Close button in the new pop-up screen
      cy.xpath('//*[@id="Close_dob_exception"]').should('exist')
      cy.wait(3000)

      //15. Click on the close button present in the new pop-up screen
      cy.xpath("//span[@class='icon icon-delete']").click()
      cy.wait(3000)

    });
   

    it('ATM SEARCH TEST', () => {
        //1. Open https://www.hsbc.co.in/
        cy.visit('https://www.hsbc.co.in/')

        //2. Scroll down to the bottom of the page
        cy.scrollTo('bottom');
        cy.wait(5000)

        //3. Click on Find your nearest branch or ATM link in footer section
        cy.xpath("(//a[@href='/ways-to-bank/branches/'])[4]").click()
        cy.wait(5000)

        //4. Validate in new page the URL has String = ‘/ways-to-bank/branches/’
        cy.url().should('include','/ways-to-bank/branches/')
        cy.wait(5000)

        //5. Validate Header as Branches & ATM
        cy.xpath("(//h1[normalize-space()='Branches & ATMs'])[1]").should('be.visible')
        cy.wait(5000)

        //6. Click on before Branch & ATM Locator button
        cy.xpath("//a[@id='content_main_button_1']").click();
        cy.wait(5000)

        //7. Type country name as India
        cy.xpath('//*[@id="searchInput"]').type('India')
        cy.wait(5000)

        //8. In drop-down option click option India
        cy.xpath("(//input[@id='searchInput'])[1]").click()
        cy.xpath("//li[@id='PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc']").click() 
        cy.scrollTo('top')
        cy.wait(5000)

        //9. Validate ATM Header name is showing as Rajbhavan Road
        cy.xpath("/html/body/main/div[2]/div/div[2]/div/div/div[1]/div/ul/li/button/p[2]").contains('Rajbhavan Road')
        cy.wait(5000)

        //10. Click on add Show more results button
        cy.xpath("//button[@aria-label='Show more results']").click()
        cy.wait(5000)

        //11. Check second ATM branch name tooltip as 2 in red color is getting displayed
        cy.xpath("/html/body/main/div[2]/div/div[2]/div/div/div[1]/div/ul/li[2]/button/p[1]/span/span").should('be.visible')
        cy.wait(5000)

        // 12. Check Instagram in social media option in footer section
        cy.xpath("//a[@class='social-image social-icon-instagram']").should('be.visible')

        //13. Check Facebook in social media option in footer section
        cy.xpath("//a[@class='social-image social-icon-facebook']").should('be.visible')

        //14. Check Twitter in social media option in footer section
        cy.xpath("//a[@class='social-image social-icon-twitter']").should('be.visible')

        //15. Check Youtube in social media option in footer section
        cy.xpath("//a[@class='social-image social-icon-youtube']").should('be.visible')
        cy.wait(5000)

        //16. Click on HSBC Logo
        cy.xpath("//div[@class='header-logo lg-2']").click()
        cy.wait(5000)

        //17. Validate page is navigating to home page by its title
        cy.title().should('include','HSBC India')
        cy.wait(5000)

        //18. Scroll down to the bottom
        cy.scrollTo('bottom')

        //19. Check and Click on Privacy link
        cy.xpath("(//a[normalize-space()='Privacy Statement'])[2]").click()
        cy.wait(5000)

        //20. Validate Privacy Statement as Header
        cy.xpath('//*[@id="content_intro_hero_no_image_1"]/h1').contains('Privacy Statement')
        cy.wait(5000)

        })



        it('CREDIT CARD FLOW', () => {
            //1. Open https://www.hsbc.co.in/
            cy.visit('https://www.hsbc.co.in/')
            cy.wait(2000)

            //2. Hover cursor on Banking menu navigation
            cy.xpath("//ul[@class='row']//span[@class='header-main-navigation-title'] [normalize-space()='Banking']").trigger('mouseover').click();
            cy.wait(2000)

            //3. Click on Credit Cards link
            cy.contains('Credit cards').click({force:true})
            Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
            })
            cy.wait(2000)

            //4. Validate Credit Card as a header text
            cy.xpath('/html/body/main/div[1]').contains('Credit cards')

            //6. Check there are five types of Credit Card options are available
            cy.xpath('//*[@id="chp_main_container_1"]/ul/li').should('have.length',5)

            //7. Validate first credit Card image attribute is HSBC Visa Cashback Credit  Card
            cy.xpath('//*[@id="chp_main_container_item_1"]').contains('HSBC Taj Credit Card').click()

            //8. Validate first credit Card header text is HSBC Cashback Credit Card
            cy.xpath('//*[@id="pp_intro_hero_banner_1"]/h1').contains('HSBC Taj Credit Card')
            
            //10. Validate first credit Card has attached Find out more button
            cy.xpath('//*[@id="fn-platinum-neupass"]/a[2]').should('be.visible')

            //11. Validate first credit Card has attached Apply now button
            cy.xpath('//*[@id="pp_intro_pinnedBanner_1"]/div/div').should('be.visible')
            cy.go('back')
            cy.wait(2000)

            //9. Validate first credit Card has attached Compare cards button 
            cy.xpath("//span[normalize-space()='Find the right card for you']").should('be.visible')

            //12. Click on First Credit card’s Compare cards button
            cy.xpath("//span[normalize-space()='Find the right card for you']").click()

            //13. Validate the new pop up has a close button
            cy.xpath("//button[@class='close-button']").should("be.visible")

            //14. Validate Select cards to compare is header of the pop up
            cy.xpath("//h2[@id='title-pp_tools_productComparator_4']").contains("Select cards to compare")

            //15. Check that there are four credit cards options are available in the  pop up to compare
            cy.xpath("//div[@class='tile-selector']/div[2]").should("have.length",5)

            //16. Check first and second Credit Card checkbox to compare
            cy.xpath("//div[@data-product-type='visa-platinum-credit-card']//div[@role='checkbox']").click()
            cy.xpath("//div[@data-product-type='premier-mastercard-credit-card']//div[@role='checkbox']").click()

            //17. Click on Compare button
            cy.xpath("//button[@class='A-BTNP-RW-ALL']").click()

            //18. Validate total two credit cards have been selected
            cy.xpath("(//div[@class='product-select add-product'])").should("have.length",2)

            //19. Validate two remove links are present for both the credit card
            cy.xpath("(//div[@class='product-select'])").contains("Remove card")

            //20. Click on Add card link
            cy.xpath("(//div[@class='product-select add-product'])[1]").click()

            //21. Add third credit card checkbox to compare
            cy.xpath("//div[@data-product-type='live-plus-credit-card']//div[@role='checkbox']").click()

            //22. Now validate total three credit cards have been selected
            cy.xpath("//button[@class='A-BTNP-RW-ALL']").click()

            //23. Validate total three remove links are present
            cy.xpath("(//div[@class='product-select add-product'])").should("have.length",1)

            //24. Now click on any remove link out of three
            cy.xpath("//a[@data-product-type='premier-mastercard-credit-card']//span[@aria-hidden='true'][normalize-space()='Remove card']").click()

            //25. Now only two credit card options should available in the page
            cy.xpath("(//div[@class='product-select add-product'])").should("have.length",2)

            //26. Again click on Add card link
            cy.xpath("(//div[@class='product-select add-product'])[1]").click()

            //27. In pop-up, click on close button
            cy.xpath("//button[@class='close-button']").click()

            })
});
    

