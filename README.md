# Interview Project (A)
## Instructions
Build a web page that displays 15 random NSNs from the database table `nsn`. Each time the web page is loaded it should select and display a different set of 15 NSNs. Each NSN listed on the web page should be hyperlinked to another page where nsn details are displayed. At the top/header of every page include a search box. Searching for NSN "8415-00-782-2889" should take the user directly to that NSN product detail page.

- You may use any technologies and/or frameworks. - You must use the SQL database as-is without modification.
- Use AeroBase Group styling on your web pages. Ex: https://aerobasegroup.com https://aerobase.us
- Expected time to complete: 3 - 5 hours

1. Build a web page that displays 15 random NSNs from the database.
Expected result: When user visits {url:home}, they should see 15 hyperlinked NSNs. If user refreshes the page they should see a different set of 15 NSNs randomly selected from the database.

Products are stored in the database tables `nsn` and `nsn_flis_parts`. The {url:home} web page should list only the NSNs.

The `nsn` table contains all national stock numbers in existance. A national stock number is a formatted unique identifier which is assigned to a product with specific characteristics. Each national stock number contains a category FSC (federal supply class) code, a country code, and a unique NIIN (national item identification) code. For example NSN 8415-00-782-2889 is for a Military Jacket (seen below). There may be multiple manufacturers for this Military Jacket, however each manufacturer may use the same NSN (if the product is an exact alternate/replacement). In order to differentiate between manufacturers of this NSN, each manufacturer will issue their own part number. In the example NSN shown below the manufacturer uses the part number "MIL-L-43536". This part number is stored in the `nsn_flis_parts` table. We match manufacturer part numbers from this table with NSNs from the `nsn` table using the common NIIN column found in both tables.


NSN structure (https://aerobasegroup.com/nsn/8415-00-782-2889)

2. Each NSN listed on the web page should be hyperlinked to another page where nsn details are displayed.
Expected result: When user clicks on a NSN from the home page they are taken to a different page where the NSN data is displayed.

Create a new page for displaying NSN data. The URI of this page should be /nsn/{nsn}

All data for this NSN from the database tables `nsn`, `nsn_flis_parts`, and `nsn_characteristics` should be displayed on this page.

3. At the top/header of every page include a search box
Expected result: Regardless of which page the user is on, they can search for NSNs using an input field placed in the header area.

Add a search input to the header of every page. When the user enters a NSN in any valid format (Ex: 8415-00-782-2889 and 8415007822889 should both be valid inputs) they should be taken directly to the NSN details page for that NSN; If there are no results the user should see an error message.


Deployed Demo: 
Brief Response:
technologies used, time spent and any issues that you had

