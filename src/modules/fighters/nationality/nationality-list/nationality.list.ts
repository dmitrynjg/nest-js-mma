const nationalities = [
  { code: '🇦🇫', name: 'Afghan' },
  { code: '🇦🇱', name: 'Albanian' },
  { code: '🇩🇿', name: 'Algerian' },
  { code: '🇦🇸', name: 'American Samoan' },
  { code: '🇦🇩', name: 'Andorran' },
  { code: '🇦🇴', name: 'Angolan' },
  { code: '🇦🇮', name: 'Anguillan' },
  { code: '🇦🇶', name: 'Antarctic' },
  { code: '🇦🇬', name: 'Antiguan or Barbudan' },
  { code: '🇦🇷', name: 'Argentinean' },
  { code: '🇦🇲', name: 'Armenian' },
  { code: '🇦🇼', name: 'Aruban' },
  { code: '🇦🇺', name: 'Australian' },
  { code: '🇦🇹', name: 'Austrian' },
  { code: '🇦🇿', name: 'Azerbaijani' },
  { code: '🇧🇸', name: 'Bahamian' },
  { code: '🇧🇭', name: 'Bahraini' },
  { code: '🇧🇩', name: 'Bangladeshi' },
  { code: '🇧🇧', name: 'Barbadian' },
  { code: '🇧🇾', name: 'Belarusian' },
  { code: '🇧🇪', name: 'Belgian' },
  { code: '🇧🇿', name: 'Belizean' },
  { code: '🇧🇯', name: 'Beninese' },
  { code: '🇧🇲', name: 'Bermudian' },
  { code: '🇧🇹', name: 'Bhutanese' },
  { code: '🇧🇴', name: 'Bolivian' },
  { code: '🇧🇦', name: 'Bosnian or Herzegovinian' },
  { code: '🇧🇼', name: 'Motswana' },
  { code: '🇧🇷', name: 'Brazilian' },
  { code: '🇮🇴', name: 'British Indian Ocean Territory' },
  { code: '🇻🇬', name: 'British Virgin Islander' },
  { code: '🇧🇳', name: 'Bruneian' },
  { code: '🇧🇬', name: 'Bulgarian' },
  { code: '🇧🇫', name: 'Burkinabé' },
  { code: '🇧🇮', name: 'Burundian' },
  { code: '🇰🇭', name: 'Cambodian' },
  { code: '🇨🇲', name: 'Cameroonian' },
  { code: '🇨🇦', name: 'Canadian' },
  { code: '🇨🇻', name: 'Cape Verdean' },
  { code: '🇰🇾', name: 'Caymanian' },
  { code: '🇨🇫', name: 'Central African' },
  { code: '🇹🇩', name: 'Chadian' },
  { code: '🇨🇱', name: 'Chilean' },
  { code: '🇨🇳', name: 'Chinese' },
  { code: '🇨🇽', name: 'Christmas Islander' },
  { code: '🇨🇨', name: 'Cocos Islander' },
  { code: '🇨🇴', name: 'Colombian' },
  { code: '🇰🇲', name: 'Comorian' },
  { code: '🇨🇬', name: 'Congolese' },
  { code: '🇨🇩', name: 'Congolese' },
  { code: '🇨🇰', name: 'Cook Islander' },
  { code: '🇨🇷', name: 'Costa Rican' },
  { code: '🇭🇷', name: 'Croatian' },
  { code: '🇨🇺', name: 'Cuban' },
  { code: '🇨🇼', name: 'Curaçaoan' },
  { code: '🇨🇾', name: 'Cypriot' },
  { code: '🇨🇿', name: 'Czech' },
  { code: '🇩🇰', name: 'Danish' },
  { code: '🇩🇯', name: 'Djiboutian' },
  { code: '🇩🇲', name: 'Dominican' },
  { code: '🇩🇴', name: 'Dominican' },
  { code: '🇪🇨', name: 'Ecuadorian' },
  { code: '🇪🇬', name: 'Egyptian' },
  { code: '🇸🇻', name: 'Salvadoran' },
  { code: '🇬🇶', name: 'Equatorial Guinean' },
  { code: '🇪🇷', name: 'Eritrean' },
  { code: '🇪🇪', name: 'Estonian' },
  { code: '🇪🇹', name: 'Ethiopian' },
  { code: '🇫🇰', name: 'Fijian' },
  { code: '🇫🇮', name: 'Finnish' },
  { code: '🇫🇷', name: 'French' },
  { code: '🇵🇫', name: 'French Polynesian' },
  { code: '🇬🇦', name: 'Gabonese' },
  { code: '🇬🇲', name: 'Gambian' },
  { code: '🇬🇪', name: 'Georgian' },
  { code: '🇩🇪', name: 'German' },
  { code: '🇬🇭', name: 'Ghanaian' },
  { code: '🇬🇮', name: 'Gibraltar' },
  { code: '🇬🇷', name: 'Greek' },
  { code: '🇬🇱', name: 'Greenlandic' },
  { code: '🇬🇩', name: 'Grenadian' },
  { code: '🇬🇵', name: 'Guadeloupean' },
  { code: '🇬🇺', name: 'Guamanian' },
  { code: '🇬🇹', name: 'Guatemalan' },
  { code: '🇬🇬', name: 'Channel Islander' },
  { code: '🇬🇳', name: 'Guinean' },
  { code: '🇬🇼', name: 'Bissau-Guinean' },
  { code: '🇬🇾', name: 'Guyanese' },
  { code: '🇭🇹', name: 'Haitian' },
  { code: '🇭🇳', name: 'Honduran' },
  { code: '🇭🇰', name: 'Hong Konger' },
  { code: '🇭🇺', name: 'Hungarian' },
  { code: '🇮🇸', name: 'Icelander' },
  { code: '🇮🇳', name: 'Indian' },
  { code: '🇮🇩', name: 'Indonesian' },
  { code: '🇮🇷', name: 'Iranian' },
  { code: '🇮🇶', name: 'Iraqi' },
  { code: '🇮🇪', name: 'Irish' },
  { code: '🇮🇱', name: 'Israeli' },
  { code: '🇮🇹', name: 'Italian' },
  { code: '🇨🇮', name: 'Ivorian' },
  { code: '🇯🇲', name: 'Jamaican' },
  { code: '🇯🇵', name: 'Japanese' },
  { code: '🇯🇪', name: 'Channel Islander' },
  { code: '🇯🇴', name: 'Jordanian' },
  { code: '🇰🇿', name: 'Kazakhstani' },
  { code: '🇰🇪', name: 'Kenyan' },
  { code: '🇰🇮', name: 'Kiribati' },
  { code: '🇽🇰', name: 'Kosovar' },
  { code: '🇰🇼', name: 'Kuwaiti' },
  { code: '🇰🇬', name: 'Kyrgyzstani' },
  { code: '🇱🇦', name: 'Lao' },
  { code: '🇱🇻', name: 'Latvian' },
  { code: '🇱🇧', name: 'Lebanese' },
  { code: '🇱🇸', name: 'Basotho' },
  { code: '🇱🇷', name: 'Liberian' },
  { code: '🇱🇾', name: 'Libyan' },
  { code: '🇱🇮', name: 'Liechtenstein' },
  { code: '🇱🇹', name: 'Lithuanian' },
  { code: '🇱🇺', name: 'Luxembourgish' },
  { code: '🇲🇴', name: 'Macanese' },
  { code: '🇲🇰', name: 'Macedonian' },
  { code: '🇲🇬', name: 'Malagasy' },
  { code: '🇲🇼', name: 'Malawian' },
  { code: '🇲🇾', name: 'Malaysian' },
  { code: '🇲🇻', name: 'Maldivian' },
  { code: '🇲🇱', name: 'Malian' },
  { code: '🇲🇹', name: 'Maltese' },
  { code: '🇲🇭', name: 'Marshallese' },
  { code: '🇲🇶', name: 'Martiniquais' },
  { code: '🇲🇷', name: 'Mauritanian' },
  { code: '🇲🇺', name: 'Mauritian' },
  { code: '🇾🇹', name: 'Mahoran' },
  { code: '🇲🇽', name: 'Mexican' },
  { code: '🇫🇲', name: 'Micronesian' },
  { code: '🇲🇩', name: 'Moldovan' },
  { code: '🇲🇨', name: 'Monégasque' },
  { code: '🇲🇳', name: 'Mongolian' },
  { code: '🇲🇪', name: 'Montenegrin' },
  { code: '🇲🇸', name: 'Montserratian' },
  { code: '🇲🇦', name: 'Moroccan' },
  { code: '🇲🇿', name: 'Mozambican' },
  { code: '🇲🇲', name: 'Burmese' },
  { code: '🇳🇦', name: 'Namibian' },
  { code: '🇳🇷', name: 'Nauruan' },
  { code: '🇳🇵', name: 'Nepalese' },
  { code: '🇳🇱', name: 'Dutch' },
  { code: '🇳🇨', name: 'New Caledonian' },
  { code: '🇳🇿', name: 'New Zealander' },
  { code: '🇳🇮', name: 'Nicaraguan' },
  { code: '🇳🇪', name: 'Nigerien' },
  { code: '🇳🇬', name: 'Nigerian' },
  { code: '🇳🇺', name: 'Niuean' },
  { code: '🇳🇫', name: 'Norfolk Islander' },
  { code: '🇰🇵', name: 'North Korean' },
  { code: '🇲🇵', name: 'Northern Mariana Islander' },
  { code: '🇳🇴', name: 'Norwegian' },
  { code: '🇴🇲', name: 'Omani' },
  { code: '🇵🇰', name: 'Pakistani' },
  { code: '🇵🇼', name: 'Palauan' },
  { code: '🇵🇸', name: 'Palestinian' },
  { code: '🇵🇦', name: 'Panamanian' },
  { code: '🇵🇬', name: 'Papua New Guinean' },
  { code: '🇵🇾', name: 'Paraguayan' },
  { code: '🇵🇪', name: 'Peruvian' },
  { code: '🇵🇭', name: 'Filipino' },
  { code: '🇵🇳', name: 'Pitcairn Islander' },
  { code: '🇵🇱', name: 'Polish' },
  { code: '🇵🇹', name: 'Portuguese' },
  { code: '🇵🇷', name: 'Puerto Rican' },
  { code: '🇶🇦', name: 'Qatari' },
  { code: '🇷🇪', name: 'Réunionese' },
  { code: '🇷🇴', name: 'Romanian' },
  { code: '🇷🇺', name: 'Russian' },
  { code: '🇷🇼', name: 'Rwandan' },
  { code: '🇼🇸', name: 'Samoan' },
  { code: '🇸🇲', name: 'Sanmarinese' },
  { code: '🇸🇹', name: 'São Toméan' },
  { code: '🇸🇦', name: 'Saudi Arabian' },
  { code: '🇸🇳', name: 'Senegalese' },
  { code: '🇷🇸', name: 'Serbian' },
  { code: '🇸🇨', name: 'Seychellois' },
  { code: '🇸🇱', name: 'Sierra Leonean' },
  { code: '🇸🇬', name: 'Singaporean' },
  { code: '🇸🇽', name: 'Sint Maarten' },
  { code: '🇸🇰', name: 'Slovak' },
  { code: '🇸🇮', name: 'Slovenian' },
  { code: '🇸🇧', name: 'Solomon Islander' },
  { code: '🇸🇴', name: 'Somali' },
  { code: '🇿🇦', name: 'South African' },
  { code: '🇬🇸', name: 'South Georgia and the South Sandwich Islander' },
  { code: '🇰🇷', name: 'South Korean' },
  { code: '🇸🇸', name: 'South Sudanese' },
  { code: '🇪🇸', name: 'Spanish' },
  { code: '🇱🇰', name: 'Sri Lankan' },
  { code: '🇸🇭', name: 'Saint Helenian' },
  { code: '🇵🇲', name: 'Saint-Pierrais or Miquelonnais' },
  { code: '🇸🇩', name: 'Sudanese' },
];

export default nationalities;
