### How to setup:
1. npm i
2. npm start
3. open localhost:8080

### How to test
        npm test

#### Not sure how to properly proceed:
1. Relative position of text elements (each line can be of an arbitrary length,
so I assumed that the upper lines stuck to the top and the uppermost line can push the lower one, while the lowermost is stuck to the bottom)
2. "ab 35m^2" - applicable only when multiple apartments are rented or sold, when there's one we can show the exact area, so I omitted 'ab'.
3. Material design guidelines state elements should be aligned to 8px grid, but since I had only a png as a reference, you can see some deviations from this rule.
4. It seems that https://api.mcmakler.de/v1 doesn't have CORS enabled, so I had to setup a parallel process, which might not work properly on Windows. In this case stop the process and run **npm run serve** and **npm run start.api** separately.