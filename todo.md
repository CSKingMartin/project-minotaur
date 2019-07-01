# TODO:

### Ideas

##### Atomic Categories
- Kate says they're only really useful organizers for developers (I'm inclined to agree).
	- BIG: Kate would like the ability to be able to manage groups of components, pages, etc.
- Sara suggested either making that relationship more pervasive and available throughout the system.
	- this could look like a 'data-tree' showing the inhertiance paths?
	- aka, atom A + atom B = molecule C

- Devin suggests making React bundling into the production build be optional
	- Clients don't always want
	- Makes client aware
	- too hard to rip out

- Bhavana says:
  - import realtime data from Google Analytics or CRM (any connection source)
  - system is able ot analyze data based on our preset functions or queries
    - This way we can customize the offernings for 'future' recommendations based on realtime data
    - this isnt' so much a dashboard, as it is a 
    1. Grab (and keep grabbing) the current data
    2. Based on returned data, we can run algorithms to make predictions / recomendations
    3. Algorithms exist! That's Bhavana's job!

### BUGS:
- svg sprite for Icons no longer working
- ./pages/catalog/atoms|molecules|organisms => These directories are not cleaning out old pages on rebuild
- bad re-render bug inside of Specimen / Hanga components
