# German Zipcode

Get the city associated with the given german ZIP code. 

Using public domain ZIP code data from [OpenDataSoft](https://public.opendatasoft.com/explore/dataset/georef-germany-postleitzahl/).

Updated version of [zip-to-city](https://github.com/juliuste/zip-to-city]) with latest data and Typescript support.

## Usage

```typescript
import { germanZipcode } from "german-zipcode";

const result = germanZipcode("10117");

// Returns an object with { code, name, state } properties:
// {
//   "code": "10117",
//   "name": "Berlin Mitte",
//   "state": "Berlin"
// }

const noResult = germanZipcode("invalid");

// Returns null
```
