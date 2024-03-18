

const rawCountries = [
  {
    name: 'Afghanistan',
    iso3: 'AFG',
    iso2: 'AF',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Kabul',
  },
  {
    name: 'Aland Islands',
    iso3: 'ALA',
    iso2: 'AX',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Mariehamn',
  },
  {
    name: 'Albania',
    iso3: 'ALB',
    iso2: 'AL',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Tirana',
  },
  {
    name: 'Algeria',
    iso3: 'DZA',
    iso2: 'DZ',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Algiers',
  },
  {
    name: 'American Samoa',
    iso3: 'ASM',
    iso2: 'AS',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Pago Pago',
  },
  {
    name: 'Andorra',
    iso3: 'AND',
    iso2: 'AD',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Andorra la Vella',
  },
  {
    name: 'Angola',
    iso3: 'AGO',
    iso2: 'AO',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Luanda',
  },
  {
    name: 'Anguilla',
    iso3: 'AIA',
    iso2: 'AI',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'The Valley',
  },
  {
    name: 'Antarctica',
    iso3: 'ATA',
    iso2: 'AQ',
    region: 'Polar',
    subregion: '',
    capital: '',
  },
  {
    name: 'Antigua And Barbuda',
    iso3: 'ATG',
    iso2: 'AG',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: "St. John's",
  },
  {
    name: 'Argentina',
    iso3: 'ARG',
    iso2: 'AR',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Buenos Aires',
  },
  {
    name: 'Armenia',
    iso3: 'ARM',
    iso2: 'AM',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Yerevan',
  },
  {
    name: 'Aruba',
    iso3: 'ABW',
    iso2: 'AW',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Oranjestad',
  },
  {
    name: 'Australia',
    iso3: 'AUS',
    iso2: 'AU',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: 'Canberra',
  },
  {
    name: 'Austria',
    iso3: 'AUT',
    iso2: 'AT',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Vienna',
  },
  {
    name: 'Azerbaijan',
    iso3: 'AZE',
    iso2: 'AZ',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Baku',
  },
  {
    name: 'Bahrain',
    iso3: 'BHR',
    iso2: 'BH',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Manama',
  },
  {
    name: 'Bangladesh',
    iso3: 'BGD',
    iso2: 'BD',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Dhaka',
  },
  {
    name: 'Barbados',
    iso3: 'BRB',
    iso2: 'BB',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Bridgetown',
  },
  {
    name: 'Belarus',
    iso3: 'BLR',
    iso2: 'BY',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Minsk',
  },
  {
    name: 'Belgium',
    iso3: 'BEL',
    iso2: 'BE',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Brussels',
  },
  {
    name: 'Belize',
    iso3: 'BLZ',
    iso2: 'BZ',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'Belmopan',
  },
  {
    name: 'Benin',
    iso3: 'BEN',
    iso2: 'BJ',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Porto-Novo',
  },
  {
    name: 'Bermuda',
    iso3: 'BMU',
    iso2: 'BM',
    region: 'Americas',
    subregion: 'Northern America',
    capital: 'Hamilton',
  },
  {
    name: 'Bhutan',
    iso3: 'BTN',
    iso2: 'BT',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Thimphu',
  },
  {
    name: 'Bolivia',
    iso3: 'BOL',
    iso2: 'BO',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Sucre',
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    iso3: 'BES',
    iso2: 'BQ',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Kralendijk',
  },
  {
    name: 'Bosnia and Herzegovina',
    iso3: 'BIH',
    iso2: 'BA',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Sarajevo',
  },
  {
    name: 'Botswana',
    iso3: 'BWA',
    iso2: 'BW',
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: 'Gaborone',
  },
  {
    name: 'Bouvet Island',
    iso3: 'BVT',
    iso2: 'BV',
    region: '',
    subregion: '',
    capital: '',
  },
  {
    name: 'Brazil',
    iso3: 'BRA',
    iso2: 'BR',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Brasilia',
  },
  {
    name: 'British Indian Ocean Territory',
    iso3: 'IOT',
    iso2: 'IO',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Diego Garcia',
  },
  {
    name: 'Brunei',
    iso3: 'BRN',
    iso2: 'BN',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Bandar Seri Begawan',
  },
  {
    name: 'Bulgaria',
    iso3: 'BGR',
    iso2: 'BG',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Sofia',
  },
  {
    name: 'Burkina Faso',
    iso3: 'BFA',
    iso2: 'BF',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Ouagadougou',
  },
  {
    name: 'Burundi',
    iso3: 'BDI',
    iso2: 'BI',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Bujumbura',
  },
  {
    name: 'Cambodia',
    iso3: 'KHM',
    iso2: 'KH',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Phnom Penh',
  },
  {
    name: 'Cameroon',
    iso3: 'CMR',
    iso2: 'CM',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Yaounde',
  },
  {
    name: 'Canada',
    iso3: 'CAN',
    iso2: 'CA',
    region: 'Americas',
    subregion: 'Northern America',
    capital: 'Ottawa',
  },
  {
    name: 'Cape Verde',
    iso3: 'CPV',
    iso2: 'CV',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Praia',
  },
  {
    name: 'Cayman Islands',
    iso3: 'CYM',
    iso2: 'KY',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'George Town',
  },
  {
    name: 'Central African Republic',
    iso3: 'CAF',
    iso2: 'CF',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Bangui',
  },
  {
    name: 'Chad',
    iso3: 'TCD',
    iso2: 'TD',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: "N'Djamena",
  },
  {
    name: 'Chile',
    iso3: 'CHL',
    iso2: 'CL',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Santiago',
  },
  {
    name: 'China',
    iso3: 'CHN',
    iso2: 'CN',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Beijing',
  },
  {
    name: 'Christmas Island',
    iso3: 'CXR',
    iso2: 'CX',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: 'Flying Fish Cove',
  },
  {
    name: 'Cocos (Keeling) Islands',
    iso3: 'CCK',
    iso2: 'CC',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: 'West Island',
  },
  {
    name: 'Colombia',
    iso3: 'COL',
    iso2: 'CO',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Bogotá',
  },
  {
    name: 'Comoros',
    iso3: 'COM',
    iso2: 'KM',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Moroni',
  },
  {
    name: 'Congo',
    iso3: 'COG',
    iso2: 'CG',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Brazzaville',
  },
  {
    name: 'Cook Islands',
    iso3: 'COK',
    iso2: 'CK',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Avarua',
  },
  {
    name: 'Costa Rica',
    iso3: 'CRI',
    iso2: 'CR',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'San Jose',
  },
  {
    name: "Cote D'Ivoire (Ivory Coast)",
    iso3: 'CIV',
    iso2: 'CI',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Yamoussoukro',
  },
  {
    name: 'Croatia',
    iso3: 'HRV',
    iso2: 'HR',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Zagreb',
  },
  {
    name: 'Cuba',
    iso3: 'CUB',
    iso2: 'CU',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Havana',
  },
  {
    name: 'Curaçao',
    iso3: 'CUW',
    iso2: 'CW',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Willemstad',
  },
  {
    name: 'Cyprus',
    iso3: 'CYP',
    iso2: 'CY',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Nicosia',
  },
  {
    name: 'Czech Republic',
    iso3: 'CZE',
    iso2: 'CZ',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Prague',
  },
  {
    name: 'Democratic Republic of the Congo',
    iso3: 'COD',
    iso2: 'CD',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Kinshasa',
  },
  {
    name: 'Denmark',
    iso3: 'DNK',
    iso2: 'DK',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Copenhagen',
  },
  {
    name: 'Djibouti',
    iso3: 'DJI',
    iso2: 'DJ',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Djibouti',
  },
  {
    name: 'Dominica',
    iso3: 'DMA',
    iso2: 'DM',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Roseau',
  },
  {
    name: 'Dominican Republic',
    iso3: 'DOM',
    iso2: 'DO',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Santo Domingo',
  },
  {
    name: 'East Timor',
    iso3: 'TLS',
    iso2: 'TL',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Dili',
  },
  {
    name: 'Ecuador',
    iso3: 'ECU',
    iso2: 'EC',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Quito',
  },
  {
    name: 'Egypt',
    iso3: 'EGY',
    iso2: 'EG',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Cairo',
  },
  {
    name: 'El Salvador',
    iso3: 'SLV',
    iso2: 'SV',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'San Salvador',
  },
  {
    name: 'Equatorial Guinea',
    iso3: 'GNQ',
    iso2: 'GQ',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Malabo',
  },
  {
    name: 'Eritrea',
    iso3: 'ERI',
    iso2: 'ER',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Asmara',
  },
  {
    name: 'Estonia',
    iso3: 'EST',
    iso2: 'EE',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Tallinn',
  },
  {
    name: 'Ethiopia',
    iso3: 'ETH',
    iso2: 'ET',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Addis Ababa',
  },
  {
    name: 'Falkland Islands',
    iso3: 'FLK',
    iso2: 'FK',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Stanley',
  },
  {
    name: 'Faroe Islands',
    iso3: 'FRO',
    iso2: 'FO',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Torshavn',
  },
  {
    name: 'Fiji Islands',
    iso3: 'FJI',
    iso2: 'FJ',
    region: 'Oceania',
    subregion: 'Melanesia',
    capital: 'Suva',
  },
  {
    name: 'Finland',
    iso3: 'FIN',
    iso2: 'FI',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Helsinki',
  },
  {
    name: 'France',
    iso3: 'FRA',
    iso2: 'FR',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Paris',
  },
  {
    name: 'French Guiana',
    iso3: 'GUF',
    iso2: 'GF',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Cayenne',
  },
  {
    name: 'French Polynesia',
    iso3: 'PYF',
    iso2: 'PF',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Papeete',
  },
  {
    name: 'French Southern Territories',
    iso3: 'ATF',
    iso2: 'TF',
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: 'Port-aux-Francais',
  },
  {
    name: 'Gabon',
    iso3: 'GAB',
    iso2: 'GA',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Libreville',
  },
  {
    name: 'Gambia The',
    iso3: 'GMB',
    iso2: 'GM',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Banjul',
  },
  {
    name: 'Georgia',
    iso3: 'GEO',
    iso2: 'GE',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Tbilisi',
  },
  {
    name: 'Germany',
    iso3: 'DEU',
    iso2: 'DE',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Berlin',
  },
  {
    name: 'Ghana',
    iso3: 'GHA',
    iso2: 'GH',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Accra',
  },
  {
    name: 'Gibraltar',
    iso3: 'GIB',
    iso2: 'GI',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Gibraltar',
  },
  {
    name: 'Greece',
    iso3: 'GRC',
    iso2: 'GR',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Athens',
  },
  {
    name: 'Greenland',
    iso3: 'GRL',
    iso2: 'GL',
    region: 'Americas',
    subregion: 'Northern America',
    capital: 'Nuuk',
  },
  {
    name: 'Grenada',
    iso3: 'GRD',
    iso2: 'GD',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: "St. George's",
  },
  {
    name: 'Guadeloupe',
    iso3: 'GLP',
    iso2: 'GP',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Basse-Terre',
  },
  {
    name: 'Guam',
    iso3: 'GUM',
    iso2: 'GU',
    region: 'Oceania',
    subregion: 'Micronesia',
    capital: 'Hagatna',
  },
  {
    name: 'Guatemala',
    iso3: 'GTM',
    iso2: 'GT',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'Guatemala City',
  },
  {
    name: 'Guernsey and Alderney',
    iso3: 'GGY',
    iso2: 'GG',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'St Peter Port',
  },
  {
    name: 'Guinea',
    iso3: 'GIN',
    iso2: 'GN',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Conakry',
  },
  {
    name: 'Guinea-Bissau',
    iso3: 'GNB',
    iso2: 'GW',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Bissau',
  },
  {
    name: 'Guyana',
    iso3: 'GUY',
    iso2: 'GY',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Georgetown',
  },
  {
    name: 'Haiti',
    iso3: 'HTI',
    iso2: 'HT',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Port-au-Prince',
  },
  {
    name: 'Heard Island and McDonald Islands',
    iso3: 'HMD',
    iso2: 'HM',
    region: '',
    subregion: '',
    capital: '',
  },
  {
    name: 'Honduras',
    iso3: 'HND',
    iso2: 'HN',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'Tegucigalpa',
  },
  {
    name: 'Hong Kong S.A.R.',
    iso3: 'HKG',
    iso2: 'HK',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Hong Kong',
  },
  {
    name: 'Hungary',
    iso3: 'HUN',
    iso2: 'HU',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Budapest',
  },
  {
    name: 'Iceland',
    iso3: 'ISL',
    iso2: 'IS',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Reykjavik',
  },
  {
    name: 'India',
    iso3: 'IND',
    iso2: 'IN',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'New Delhi',
  },
  {
    name: 'Indonesia',
    iso3: 'IDN',
    iso2: 'ID',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Jakarta',
  },
  {
    name: 'Iran',
    iso3: 'IRN',
    iso2: 'IR',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Tehran',
  },
  {
    name: 'Iraq',
    iso3: 'IRQ',
    iso2: 'IQ',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Baghdad',
  },
  {
    name: 'Ireland',
    iso3: 'IRL',
    iso2: 'IE',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Dublin',
  },
  {
    name: 'Israel',
    iso3: 'ISR',
    iso2: 'IL',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Jerusalem',
  },
  {
    name: 'Italy',
    iso3: 'ITA',
    iso2: 'IT',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Rome',
  },
  {
    name: 'Jamaica',
    iso3: 'JAM',
    iso2: 'JM',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Kingston',
  },
  {
    name: 'Japan',
    iso3: 'JPN',
    iso2: 'JP',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Tokyo',
  },
  {
    name: 'Jersey',
    iso3: 'JEY',
    iso2: 'JE',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Saint Helier',
  },
  {
    name: 'Jordan',
    iso3: 'JOR',
    iso2: 'JO',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Amman',
  },
  {
    name: 'Kazakhstan',
    iso3: 'KAZ',
    iso2: 'KZ',
    region: 'Asia',
    subregion: 'Central Asia',
    capital: 'Astana',
  },
  {
    name: 'Kenya',
    iso3: 'KEN',
    iso2: 'KE',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Nairobi',
  },
  {
    name: 'Kiribati',
    iso3: 'KIR',
    iso2: 'KI',
    region: 'Oceania',
    subregion: 'Micronesia',
    capital: 'Tarawa',
  },
  {
    name: 'Kosovo',
    iso3: 'XKX',
    iso2: 'XK',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Pristina',
  },
  {
    name: 'Kuwait',
    iso3: 'KWT',
    iso2: 'KW',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Kuwait City',
  },
  {
    name: 'Kyrgyzstan',
    iso3: 'KGZ',
    iso2: 'KG',
    region: 'Asia',
    subregion: 'Central Asia',
    capital: 'Bishkek',
  },
  {
    name: 'Laos',
    iso3: 'LAO',
    iso2: 'LA',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Vientiane',
  },
  {
    name: 'Latvia',
    iso3: 'LVA',
    iso2: 'LV',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Riga',
  },
  {
    name: 'Lebanon',
    iso3: 'LBN',
    iso2: 'LB',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Beirut',
  },
  {
    name: 'Lesotho',
    iso3: 'LSO',
    iso2: 'LS',
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: 'Maseru',
  },
  {
    name: 'Liberia',
    iso3: 'LBR',
    iso2: 'LR',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Monrovia',
  },
  {
    name: 'Libya',
    iso3: 'LBY',
    iso2: 'LY',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Tripolis',
  },
  {
    name: 'Liechtenstein',
    iso3: 'LIE',
    iso2: 'LI',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Vaduz',
  },
  {
    name: 'Lithuania',
    iso3: 'LTU',
    iso2: 'LT',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Vilnius',
  },
  {
    name: 'Luxembourg',
    iso3: 'LUX',
    iso2: 'LU',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Luxembourg',
  },
  {
    name: 'Macau S.A.R.',
    iso3: 'MAC',
    iso2: 'MO',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Macao',
  },
  {
    name: 'Macedonia',
    iso3: 'MKD',
    iso2: 'MK',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Skopje',
  },
  {
    name: 'Madagascar',
    iso3: 'MDG',
    iso2: 'MG',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Antananarivo',
  },
  {
    name: 'Malawi',
    iso3: 'MWI',
    iso2: 'MW',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Lilongwe',
  },
  {
    name: 'Malaysia',
    iso3: 'MYS',
    iso2: 'MY',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Kuala Lumpur',
  },
  {
    name: 'Maldives',
    iso3: 'MDV',
    iso2: 'MV',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Male',
  },
  {
    name: 'Mali',
    iso3: 'MLI',
    iso2: 'ML',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Bamako',
  },
  {
    name: 'Malta',
    iso3: 'MLT',
    iso2: 'MT',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Valletta',
  },
  {
    name: 'Man (Isle of)',
    iso3: 'IMN',
    iso2: 'IM',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Douglas, Isle of Man',
  },
  {
    name: 'Marshall Islands',
    iso3: 'MHL',
    iso2: 'MH',
    region: 'Oceania',
    subregion: 'Micronesia',
    capital: 'Majuro',
  },
  {
    name: 'Martinique',
    iso3: 'MTQ',
    iso2: 'MQ',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Fort-de-France',
  },
  {
    name: 'Mauritania',
    iso3: 'MRT',
    iso2: 'MR',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Nouakchott',
  },
  {
    name: 'Mauritius',
    iso3: 'MUS',
    iso2: 'MU',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Port Louis',
  },
  {
    name: 'Mayotte',
    iso3: 'MYT',
    iso2: 'YT',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Mamoudzou',
  },
  {
    name: 'Mexico',
    iso3: 'MEX',
    iso2: 'MX',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'Ciudad de México',
  },
  {
    name: 'Micronesia',
    iso3: 'FSM',
    iso2: 'FM',
    region: 'Oceania',
    subregion: 'Micronesia',
    capital: 'Palikir',
  },
  {
    name: 'Moldova',
    iso3: 'MDA',
    iso2: 'MD',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Chisinau',
  },
  {
    name: 'Monaco',
    iso3: 'MCO',
    iso2: 'MC',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Monaco',
  },
  {
    name: 'Mongolia',
    iso3: 'MNG',
    iso2: 'MN',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Ulan Bator',
  },
  {
    name: 'Montenegro',
    iso3: 'MNE',
    iso2: 'ME',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Podgorica',
  },
  {
    name: 'Montserrat',
    iso3: 'MSR',
    iso2: 'MS',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Plymouth',
  },
  {
    name: 'Morocco',
    iso3: 'MAR',
    iso2: 'MA',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Rabat',
  },
  {
    name: 'Mozambique',
    iso3: 'MOZ',
    iso2: 'MZ',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Maputo',
  },
  {
    name: 'Myanmar',
    iso3: 'MMR',
    iso2: 'MM',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Nay Pyi Taw',
  },
  {
    name: 'Namibia',
    iso3: 'NAM',
    iso2: 'NA',
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: 'Windhoek',
  },
  {
    name: 'Nauru',
    iso3: 'NRU',
    iso2: 'NR',
    region: 'Oceania',
    subregion: 'Micronesia',
    capital: 'Yaren',
  },
  {
    name: 'Nepal',
    iso3: 'NPL',
    iso2: 'NP',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Kathmandu',
  },
  {
    name: 'Netherlands',
    iso3: 'NLD',
    iso2: 'NL',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Amsterdam',
  },
  {
    name: 'New Caledonia',
    iso3: 'NCL',
    iso2: 'NC',
    region: 'Oceania',
    subregion: 'Melanesia',
    capital: 'Noumea',
  },
  {
    name: 'New Zealand',
    iso3: 'NZL',
    iso2: 'NZ',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: 'Wellington',
  },
  {
    name: 'Nicaragua',
    iso3: 'NIC',
    iso2: 'NI',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'Managua',
  },
  {
    name: 'Niger',
    iso3: 'NER',
    iso2: 'NE',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Niamey',
  },
  {
    id: 'a5bcce1c-6685-4620-bb58-ffdf5643e1a3',
    name: 'Nigeria',
    iso3: 'NGA',
    iso2: 'NG',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Abuja',
  },
  {
    name: 'Niue',
    iso3: 'NIU',
    iso2: 'NU',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Alofi',
  },
  {
    name: 'Norfolk Island',
    iso3: 'NFK',
    iso2: 'NF',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: 'Kingston',
  },
  {
    name: 'North Korea',
    iso3: 'PRK',
    iso2: 'KP',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Pyongyang',
  },
  {
    name: 'Northern Mariana Islands',
    iso3: 'MNP',
    iso2: 'MP',
    region: 'Oceania',
    subregion: 'Micronesia',
    capital: 'Saipan',
  },
  {
    name: 'Norway',
    iso3: 'NOR',
    iso2: 'NO',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Oslo',
  },
  {
    name: 'Oman',
    iso3: 'OMN',
    iso2: 'OM',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Muscat',
  },
  {
    name: 'Pakistan',
    iso3: 'PAK',
    iso2: 'PK',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Islamabad',
  },
  {
    name: 'Palau',
    iso3: 'PLW',
    iso2: 'PW',
    region: 'Oceania',
    subregion: 'Micronesia',
    capital: 'Melekeok',
  },
  {
    name: 'Palestinian Territory Occupied',
    iso3: 'PSE',
    iso2: 'PS',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'East Jerusalem',
  },
  {
    name: 'Panama',
    iso3: 'PAN',
    iso2: 'PA',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'Panama City',
  },
  {
    name: 'Papua new Guinea',
    iso3: 'PNG',
    iso2: 'PG',
    region: 'Oceania',
    subregion: 'Melanesia',
    capital: 'Port Moresby',
  },
  {
    name: 'Paraguay',
    iso3: 'PRY',
    iso2: 'PY',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Asuncion',
  },
  {
    name: 'Peru',
    iso3: 'PER',
    iso2: 'PE',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Lima',
  },
  {
    name: 'Philippines',
    iso3: 'PHL',
    iso2: 'PH',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Manila',
  },
  {
    name: 'Pitcairn Island',
    iso3: 'PCN',
    iso2: 'PN',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Adamstown',
  },
  {
    name: 'Poland',
    iso3: 'POL',
    iso2: 'PL',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Warsaw',
  },
  {
    name: 'Portugal',
    iso3: 'PRT',
    iso2: 'PT',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Lisbon',
  },
  {
    name: 'Puerto Rico',
    iso3: 'PRI',
    iso2: 'PR',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'San Juan',
  },
  {
    name: 'Qatar',
    iso3: 'QAT',
    iso2: 'QA',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Doha',
  },
  {
    name: 'Reunion',
    iso3: 'REU',
    iso2: 'RE',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Saint-Denis',
  },
  {
    name: 'Romania',
    iso3: 'ROU',
    iso2: 'RO',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Bucharest',
  },
  {
    name: 'Russia',
    iso3: 'RUS',
    iso2: 'RU',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Moscow',
  },
  {
    name: 'Rwanda',
    iso3: 'RWA',
    iso2: 'RW',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Kigali',
  },
  {
    name: 'Saint Helena',
    iso3: 'SHN',
    iso2: 'SH',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Jamestown',
  },
  {
    name: 'Saint Kitts And Nevis',
    iso3: 'KNA',
    iso2: 'KN',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Basseterre',
  },
  {
    name: 'Saint Lucia',
    iso3: 'LCA',
    iso2: 'LC',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Castries',
  },
  {
    name: 'Saint Pierre and Miquelon',
    iso3: 'SPM',
    iso2: 'PM',
    region: 'Americas',
    subregion: 'Northern America',
    capital: 'Saint-Pierre',
  },
  {
    name: 'Saint Vincent And The Grenadines',
    iso3: 'VCT',
    iso2: 'VC',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Kingstown',
  },
  {
    name: 'Saint-Barthelemy',
    iso3: 'BLM',
    iso2: 'BL',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Gustavia',
  },
  {
    name: 'Saint-Martin (French part)',
    iso3: 'MAF',
    iso2: 'MF',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Marigot',
  },
  {
    name: 'Samoa',
    iso3: 'WSM',
    iso2: 'WS',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Apia',
  },
  {
    name: 'San Marino',
    iso3: 'SMR',
    iso2: 'SM',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'San Marino',
  },
  {
    name: 'Sao Tome and Principe',
    iso3: 'STP',
    iso2: 'ST',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Sao Tome',
  },
  {
    name: 'Saudi Arabia',
    iso3: 'SAU',
    iso2: 'SA',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Riyadh',
  },
  {
    name: 'Senegal',
    iso3: 'SEN',
    iso2: 'SN',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Dakar',
  },
  {
    name: 'Serbia',
    iso3: 'SRB',
    iso2: 'RS',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Belgrade',
  },
  {
    name: 'Seychelles',
    iso3: 'SYC',
    iso2: 'SC',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Victoria',
  },
  {
    name: 'Sierra Leone',
    iso3: 'SLE',
    iso2: 'SL',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Freetown',
  },
  {
    name: 'Singapore',
    iso3: 'SGP',
    iso2: 'SG',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Singapur',
  },
  {
    name: 'Sint Maarten (Dutch part)',
    iso3: 'SXM',
    iso2: 'SX',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Philipsburg',
  },
  {
    name: 'Slovakia',
    iso3: 'SVK',
    iso2: 'SK',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Bratislava',
  },
  {
    name: 'Slovenia',
    iso3: 'SVN',
    iso2: 'SI',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Ljubljana',
  },
  {
    name: 'Solomon Islands',
    iso3: 'SLB',
    iso2: 'SB',
    region: 'Oceania',
    subregion: 'Melanesia',
    capital: 'Honiara',
  },
  {
    name: 'Somalia',
    iso3: 'SOM',
    iso2: 'SO',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Mogadishu',
  },
  {
    name: 'South Africa',
    iso3: 'ZAF',
    iso2: 'ZA',
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: 'Pretoria',
  },
  {
    name: 'South Georgia',
    iso3: 'SGS',
    iso2: 'GS',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Grytviken',
  },
  {
    name: 'South Korea',
    iso3: 'KOR',
    iso2: 'KR',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Seoul',
  },
  {
    name: 'South Sudan',
    iso3: 'SSD',
    iso2: 'SS',
    region: 'Africa',
    subregion: 'Middle Africa',
    capital: 'Juba',
  },
  {
    name: 'Spain',
    iso3: 'ESP',
    iso2: 'ES',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Madrid',
  },
  {
    name: 'Sri Lanka',
    iso3: 'LKA',
    iso2: 'LK',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'Colombo',
  },
  {
    name: 'Sudan',
    iso3: 'SDN',
    iso2: 'SD',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Khartoum',
  },
  {
    name: 'Suriname',
    iso3: 'SUR',
    iso2: 'SR',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Paramaribo',
  },
  {
    name: 'Svalbard And Jan Mayen Islands',
    iso3: 'SJM',
    iso2: 'SJ',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Longyearbyen',
  },
  {
    name: 'Swaziland',
    iso3: 'SWZ',
    iso2: 'SZ',
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: 'Mbabane',
  },
  {
    name: 'Sweden',
    iso3: 'SWE',
    iso2: 'SE',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Stockholm',
  },
  {
    name: 'Switzerland',
    iso3: 'CHE',
    iso2: 'CH',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Bern',
  },
  {
    name: 'Syria',
    iso3: 'SYR',
    iso2: 'SY',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Damascus',
  },
  {
    name: 'Taiwan',
    iso3: 'TWN',
    iso2: 'TW',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Taipei',
  },
  {
    name: 'Tajikistan',
    iso3: 'TJK',
    iso2: 'TJ',
    region: 'Asia',
    subregion: 'Central Asia',
    capital: 'Dushanbe',
  },
  {
    name: 'Tanzania',
    iso3: 'TZA',
    iso2: 'TZ',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Dodoma',
  },
  {
    name: 'Thailand',
    iso3: 'THA',
    iso2: 'TH',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Bangkok',
  },
  {
    name: 'The Bahamas',
    iso3: 'BHS',
    iso2: 'BS',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Nassau',
  },
  {
    name: 'Togo',
    iso3: 'TGO',
    iso2: 'TG',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Lome',
  },
  {
    name: 'Tokelau',
    iso3: 'TKL',
    iso2: 'TK',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: '',
  },
  {
    name: 'Tonga',
    iso3: 'TON',
    iso2: 'TO',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: "Nuku'alofa",
  },
  {
    name: 'Trinidad And Tobago',
    iso3: 'TTO',
    iso2: 'TT',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Port of Spain',
  },
  {
    name: 'Tunisia',
    iso3: 'TUN',
    iso2: 'TN',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Tunis',
  },
  {
    name: 'Turkey',
    iso3: 'TUR',
    iso2: 'TR',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Ankara',
  },
  {
    name: 'Turkmenistan',
    iso3: 'TKM',
    iso2: 'TM',
    region: 'Asia',
    subregion: 'Central Asia',
    capital: 'Ashgabat',
  },
  {
    name: 'Turks And Caicos Islands',
    iso3: 'TCA',
    iso2: 'TC',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Cockburn Town',
  },
  {
    name: 'Tuvalu',
    iso3: 'TUV',
    iso2: 'TV',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Funafuti',
  },
  {
    name: 'Uganda',
    iso3: 'UGA',
    iso2: 'UG',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Kampala',
  },
  {
    name: 'Ukraine',
    iso3: 'UKR',
    iso2: 'UA',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Kiev',
  },
  {
    name: 'United Arab Emirates',
    iso3: 'ARE',
    iso2: 'AE',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Abu Dhabi',
  },
  {
    name: 'United Kingdom',
    iso3: 'GBR',
    iso2: 'GB',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'London',
  },
  {
    name: 'United States',
    iso3: 'USA',
    iso2: 'US',
    region: 'Americas',
    subregion: 'Northern America',
    capital: 'Washington',
  },
  {
    name: 'United States Minor Outlying Islands',
    iso3: 'UMI',
    iso2: 'UM',
    region: 'Americas',
    subregion: 'Northern America',
    capital: '',
  },
  {
    name: 'Uruguay',
    iso3: 'URY',
    iso2: 'UY',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Montevideo',
  },
  {
    name: 'Uzbekistan',
    iso3: 'UZB',
    iso2: 'UZ',
    region: 'Asia',
    subregion: 'Central Asia',
    capital: 'Tashkent',
  },
  {
    name: 'Vanuatu',
    iso3: 'VUT',
    iso2: 'VU',
    region: 'Oceania',
    subregion: 'Melanesia',
    capital: 'Port Vila',
  },
  {
    name: 'Vatican City State (Holy See)',
    iso3: 'VAT',
    iso2: 'VA',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Vatican City',
  },
  {
    name: 'Venezuela',
    iso3: 'VEN',
    iso2: 'VE',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Caracas',
  },
  {
    name: 'Vietnam',
    iso3: 'VNM',
    iso2: 'VN',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Hanoi',
  },
  {
    name: 'Virgin Islands (British)',
    iso3: 'VGB',
    iso2: 'VG',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Road Town',
  },
  {
    name: 'Virgin Islands (US)',
    iso3: 'VIR',
    iso2: 'VI',
    region: 'Americas',
    subregion: 'Caribbean',
    capital: 'Charlotte Amalie',
  },
  {
    name: 'Wallis And Futuna Islands',
    iso3: 'WLF',
    iso2: 'WF',
    region: 'Oceania',
    subregion: 'Polynesia',
    capital: 'Mata Utu',
  },
  {
    name: 'Western Sahara',
    iso3: 'ESH',
    iso2: 'EH',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'El-Aaiun',
  },
  {
    name: 'Yemen',
    iso3: 'YEM',
    iso2: 'YE',
    region: 'Asia',
    subregion: 'Western Asia',
    capital: 'Sanaa',
  },
  {
    name: 'Zambia',
    iso3: 'ZMB',
    iso2: 'ZM',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Lusaka',
  },
  {
    name: 'Zimbabwe',
    iso3: 'ZWE',
    iso2: 'ZW',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Harare',
  },
];


export const countries = rawCountries.map(country => ({
  label: country.name,
  value: country.iso3
}))



export const IMAGE_BASE_URL = 'http://172.104.147.51/'


export const priceOptions = [
  { label: "Under ₦ 4,000", range: { lt: 4001 } },
  { label: "₦ 4,000 - ₦ 24,000", range: { gt: 3999, lt: 24001 } },
  { label: "₦ 24,000 - ₦ 200,000", range: { gt: 23999, lt: 200001 } },
  { label: "₦ 200,000 - ₦ 10,000,000", range: { gt: 199999, lt: 10000001 } },
  { label: "More than ₦ 10,000,000", range: { gt: 10000000 } },
];