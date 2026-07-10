const teamColors = {
  Green: '#16a34a',
  Blue: '#2563eb',
  Pink: '#db2777',
  Red: '#dc2626',
  Orange: '#f97316',
  Purple: '#7c3aed',
  Yellow: '#eab308',
  Gray: '#6b7280'
};

const scheduleGroups = [
  {
    id: 'green-blue-pink-red',
    label: 'Green / Blue / Pink / Red',
    teams: ['Green', 'Blue', 'Pink', 'Red']
  },
  {
    id: 'orange-purple-yellow-gray',
    label: 'Orange / Purple / Yellow / Gray',
    teams: ['Orange', 'Purple', 'Yellow', 'Gray']
  }
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const schedule = {
  Monday: [
    ['10:00 AM', 'Registration Begins - AC; Activities Available - AC', 'all'],
    ['12:00 PM', 'Lunch available until 1:30 PM - Dining Hall', 'all'],
    ['2:00 PM', 'Cabin Leader Orientation - Upstairs AC 205/206', 'all'],
    ['2:00 PM', 'Praise & Worship - Auditorium', 'all'],
    ['2:30 PM', 'Welcome to Camp / Intro Directors - Auditorium', 'all'],
    ['2:50 PM', 'Meet Your Cabin Leaders - at your room', 'all'],
    ['2:50 PM', 'Support Staff Meeting - location TBD', 'all'],
    ['3:30 PM', 'Team Meeting at Team Flag', 'all'],
    ['4:00 PM', 'ADD - Guys: Auditorium; Girls: Schneider Center', 'all'],
    ['5:00 PM', 'Camp Director Dismissal - Girls: Auditorium; Guys: Schneider Center', 'all'],
    ['5:15 PM', 'Dinner - Dining Hall', 'green-blue-pink-red'],
    ['6:00 PM', 'Dinner - Dining Hall', 'orange-purple-yellow-gray'],
    ['6:15 PM', 'Pre-Service Prayer - Auditorium', 'all'],
    ['7:00 PM', 'Evening Rally 1 - Auditorium', 'green-blue-pink-red'],
    ['7:00 PM', 'Cafe, Activities & Store - AC', 'orange-purple-yellow-gray'],
    ['7:00 PM', 'New Cabin Leader 101 - Upstairs AC', 'green-blue-pink-red'],
    ['7:30 PM', 'Team Captain Meeting - Schneider Center, Lewis Room', 'all'],
    ['9:00 PM', 'Evening Rally 2 - Auditorium', 'orange-purple-yellow-gray'],
    ['9:00 PM', 'Cafe, Activities & Store - AC', 'green-blue-pink-red'],
    ['9:00 PM', 'New Cabin Leader 101 - Upstairs AC', 'orange-purple-yellow-gray'],
    ['12:00 AM', 'Lights Out', 'all']
  ],
  Tuesday: [
    ['7:30 AM', 'Breakfast - Dining Hall', 'orange-purple-yellow-gray'],
    ['8:15 AM', 'Breakfast - Dining Hall', 'green-blue-pink-red'],
    ['9:15 AM', 'Team Meeting - Team Flags; Girls: Field Flags; Guys: Parking Lot Flags', 'all'],
    ['9:30 AM', 'Girls - Team Comp; Guys - ADD', 'all'],
    ['10:45 AM', 'Cabin Leader Meeting - Upstairs AC 205/206', 'all'],
    ['10:45 AM', 'Breakout: 6th-8th at The Hub (Fountain); 9th-12th at Schneider Center', 'all'],
    ['11:45 AM', 'Lunch - Dining Hall', 'orange-purple-yellow-gray'],
    ['12:30 PM', 'Lunch - Dining Hall', 'green-blue-pink-red'],
    ['1:30 PM', 'Team Meeting - Team Flags; Guys: Field Flags; Girls: Parking Lot Flags', 'all'],
    ['1:45 PM', 'Girls - ADD; Guys - Team Comp', 'all'],
    ['2:45 PM', 'Clean Up / Prepare for Free Time - Cabins', 'all'],
    ['3:00 PM', 'Free Time - Activities', 'all'],
    ['3:00 PM', 'High Ropes - Green paper wristbands', 'all'],
    ['4:45 PM', 'Free Time Activities End', 'all'],
    ['5:00 PM', 'Dinner - Dining Hall', 'orange-purple-yellow-gray'],
    ['5:45 PM', 'Dinner - Dining Hall', 'green-blue-pink-red'],
    ['6:15 PM', 'Pre-Service Prayer - Auditorium', 'all'],
    ['7:00 PM', 'Evening Rally 1 - Auditorium', 'orange-purple-yellow-gray'],
    ['7:00 PM', 'Cafe, Activities & Store - AC', 'green-blue-pink-red'],
    ['9:00 PM', 'Evening Rally 2 - Auditorium', 'green-blue-pink-red'],
    ['9:00 PM', 'Cafe, Activities & Store - AC', 'orange-purple-yellow-gray'],
    ['12:00 AM', 'Lights Out', 'all']
  ],
  Wednesday: [
    ['7:30 AM', 'Breakfast - Dining Hall', 'green-blue-pink-red'],
    ['8:15 AM', 'Breakfast - Dining Hall', 'orange-purple-yellow-gray'],
    ['9:15 AM', 'Team Meeting - Team Flags; Girls: Field Flags; Guys: Parking Lot Flags', 'all'],
    ['9:30 AM', 'Girls - Team Comp; Guys - ADD', 'all'],
    ['10:45 AM', 'Cabin Leader Meeting - Upstairs AC 205/206', 'all'],
    ['10:45 AM', 'Guys - All Grades - Auditorium', 'all'],
    ['11:00 AM', 'Girls - All Grades - Schneider Center', 'all'],
    ['11:45 AM', 'Lunch - Dining Hall', 'green-blue-pink-red'],
    ['12:30 PM', 'Lunch - Dining Hall', 'orange-purple-yellow-gray'],
    ['1:30 PM', 'Team Meeting - Team Flags; Guys: Field Flags; Girls: Parking Lot Flags', 'all'],
    ['1:45 PM', 'Girls - ADD; Guys - Team Comp', 'all'],
    ['2:45 PM', 'Clean Up / Prepare for Free Time - Cabins', 'all'],
    ['3:00 PM', 'Free Time - Activities', 'all'],
    ['3:00 PM', 'High Ropes - Yellow paper wristbands', 'all'],
    ['4:45 PM', 'Free Time Activities End', 'all'],
    ['5:00 PM', 'Dinner - Dining Hall', 'green-blue-pink-red'],
    ['5:45 PM', 'Dinner - Dining Hall', 'orange-purple-yellow-gray'],
    ['6:15 PM', 'Pre-Service Prayer - Auditorium', 'all'],
    ['7:00 PM', 'Evening Rally 1 - Auditorium', 'green-blue-pink-red'],
    ['7:00 PM', 'Cafe, Activities & Store - AC', 'orange-purple-yellow-gray'],
    ['9:00 PM', 'Evening Rally 2 - Auditorium', 'orange-purple-yellow-gray'],
    ['9:00 PM', 'Cafe, Activities & Store - AC', 'green-blue-pink-red'],
    ['12:00 AM', 'Lights Out', 'all']
  ],
  Thursday: [
    ['7:30 AM', 'Breakfast - Dining Hall', 'orange-purple-yellow-gray'],
    ['8:15 AM', 'Breakfast - Dining Hall', 'green-blue-pink-red'],
    ['9:15 AM', 'Team Meeting - Team Flags', 'all'],
    ['9:30 AM', 'The Final Dream', 'all'],
    ['10:45 AM', 'Cabin Leader Meeting - Upstairs AC 205/206', 'all'],
    ['10:45 AM', 'Breakout: 6th-8th at Schneider Center; 9th-12th at The Hub (Fountain)', 'all'],
    ['11:45 AM', 'Lunch - Dining Hall', 'orange-purple-yellow-gray'],
    ['12:30 PM', 'Lunch - Dining Hall', 'green-blue-pink-red'],
    ['1:30 PM', 'Cabin Leader Showdown & Camp Champ Announcement - Parking Lot', 'all'],
    ['2:00 PM', 'Dismiss to Rooms - Prepare for Free Time', 'all'],
    ['2:30 PM', 'Free Time - Activities', 'all'],
    ['3:00 PM', 'Beach Opens', 'all'],
    ['3:00 PM', 'High Ropes - Blue paper wristbands', 'all'],
    ['4:45 PM', 'Free Time Activities End', 'all'],
    ['5:00 PM', 'Camp Champ Party - The Hub', 'all'],
    ['5:00 PM', 'Dinner - Dining Hall', 'orange-purple-yellow-gray'],
    ['5:45 PM', 'Dinner - Dining Hall', 'green-blue-pink-red'],
    ['6:15 PM', 'Pre-Service Prayer - Auditorium', 'all'],
    ['7:00 PM', 'Evening Rally 1 - Auditorium', 'orange-purple-yellow-gray'],
    ['7:00 PM', 'Cafe, Activities & Store - AC', 'green-blue-pink-red'],
    ['9:00 PM', 'Evening Rally 2 - Auditorium', 'green-blue-pink-red'],
    ['9:00 PM', 'Cafe, Activities & Store - AC', 'orange-purple-yellow-gray'],
    ['12:00 AM', 'Lights Out', 'all']
  ],
  Friday: [
    ['7:30 AM', 'Wake Up & Clean Up - rooms must be vacated by 9:00 AM', 'all'],
    ['8:00 AM', 'Activities Available - AC', 'all'],
    ['8:30 AM', 'Brunch - Dining Hall', 'green-blue-pink-red'],
    ['9:15 AM', 'Brunch - Dining Hall', 'orange-purple-yellow-gray'],
    ['10:00 AM', 'Closing Rally - Auditorium; Communion', 'all']
  ]
};

const contacts = [
  { role: 'TC Director', name: 'Daniel Cancel', phone: '(773) 663-6119', photo: 'photos/Daniel-Cancel.jpg' },
  { role: 'TC Director', name: 'Mark Valkanet', phone: '(224) 715-5951', photo: 'photos/mark-valkanet.jpg' },
  { role: 'Student Director (Male Dean)', name: 'Jacob Dilger', phone: '(217) 821-6969', photo: 'photos/Jacob-Dilger.jpg' },
  { role: 'Student Director (Male Dean)', name: 'Cohl Callies', phone: '(618) 977-5935', photo: 'photos/cohl-callies.jpg' },
  { role: 'Student Director (Male Dean)', name: 'Ethan Mills', phone: '(281) 967-0325', photo: 'photos/Ethan-Mills.jpg' },
  { role: 'Student Director (Female Dean)', name: 'Venessa Cancel', phone: '(773) 621-9633', photo: 'photos/VENESSA-CANCEL.jpg' },
  { role: 'Student Director (Female Dean)', name: 'Kaitlyn Deese', phone: '(417) 773-6873', photo: 'photos/kaitlyn-deese.jpg' },
  { role: 'Student Director (Female Dean)', name: 'Misty Valkanet', phone: '(224) 715-5953', photo: 'photos/misty-valkanet.jpg' }
];

const gameSchedule = [
  {
    day: 'Monday',
    note: "Activity Director's Dream",
    blocks: [
      { time: '4:00 PM', title: "Activity Director's Dream", detail: 'Guys - Auditorium; Girls - Schneider Center' }
    ]
  },
  {
    day: 'Tuesday',
    note: 'Team Comp Matchups',
    blocks: [
      {
        time: '9:30-10:45 AM',
        title: 'Girls Team Comp',
        group: 'Girls Team Comp',
        columns: ['9:30-10:00 AM', '10:15-10:45 AM'],
        matches: [
          ['Red vs Orange', 'Water Balloon Volleyball', 'Melon Mayhem'],
          ['Yellow vs Green', 'Melon Mayhem', 'Water Balloon Volleyball'],
          ['Blue vs Purple', 'Ultimate Field Basketball', 'Four Way Hockey'],
          ['Gray vs Pink', 'Four Way Hockey', 'Ultimate Field Basketball']
        ]
      },
      {
        time: '1:30-2:45 PM',
        title: 'Boys Team Comp',
        group: 'Boys Team Comp',
        columns: ['1:30-2:00 PM', '2:15-2:45 PM'],
        matches: [
          ['Red vs Blue', 'Water Balloon Volleyball', 'Melon Mayhem'],
          ['Gray vs Yellow', 'Melon Mayhem', 'Water Balloon Volleyball'],
          ['Orange vs Purple', 'Ultimate Field Basketball', 'Four Way Hockey'],
          ['Green vs Pink', 'Four Way Hockey', 'Ultimate Field Basketball']
        ]
      }
    ]
  },
  {
    day: 'Wednesday',
    note: 'Team Comp Matchups',
    blocks: [
      {
        time: '9:30-10:45 AM',
        title: 'Girls Team Comp',
        group: 'Girls Team Comp',
        columns: ['9:30-10:00 AM', '10:15-10:45 AM'],
        matches: [
          ['Red vs Green', 'Ultimate Field Basketball', 'Four Way Hockey'],
          ['Yellow vs Orange', 'Four Way Hockey', 'Ultimate Field Basketball'],
          ['Blue vs Gray', 'Water Balloon Volleyball', 'Melon Mayhem'],
          ['Pink vs Purple', 'Melon Mayhem', 'Water Balloon Volleyball']
        ]
      },
      {
        time: '1:30-2:45 PM',
        title: 'Boys Team Comp',
        group: 'Boys Team Comp',
        columns: ['1:30-2:00 PM', '2:15-2:45 PM'],
        matches: [
          ['Red vs Gray', 'Ultimate Field Basketball', 'Four Way Hockey'],
          ['Blue vs Yellow', 'Four Way Hockey', 'Ultimate Field Basketball'],
          ['Orange vs Pink', 'Water Balloon Volleyball', 'Melon Mayhem'],
          ['Green vs Purple', 'Melon Mayhem', 'Water Balloon Volleyball']
        ]
      }
    ]
  },
  {
    day: 'Thursday',
    note: 'Final Dream',
    blocks: [
      { time: '9:30-10:45 AM', title: 'The Final Dream', detail: 'Start/finish: Rec Field 4' },
      { time: '1:30-2:45 PM', title: 'Camp Champ + Cabin Leader Showdown', detail: 'Lot between AC and Clark' }
    ]
  }
];

const addLocations = [
  { day: 'Monday', time: '4:00 PM', details: ['Guys ADD - Auditorium', 'Girls ADD - Schneider Center'] },
  { day: 'Tuesday', time: '9:30 AM', details: ['Guys ADD - Auditorium', 'Girls Team Comp - see Tuesday matchups'] },
  { day: 'Tuesday', time: '1:45 PM', details: ['Girls ADD - Auditorium', 'Boys Team Comp - see Tuesday matchups'] },
  { day: 'Wednesday', time: '9:30 AM', details: ['Guys ADD - Auditorium', 'Girls Team Comp - see Wednesday matchups'] },
  { day: 'Wednesday', time: '1:45 PM', details: ['Girls ADD - Auditorium', 'Boys Team Comp - see Wednesday matchups'] },
  { day: 'Thursday', time: '9:30 AM', details: ['The Final Dream - Rec Field 4'] }
];

const teamCompLocations = {
  'Ultimate Field Basketball': 'Rec Field 4',
  'Four Way Hockey': 'Cottonwood Pavilion',
  'Melon Mayhem': 'Softball Diamond',
  'Water Balloon Volleyball': 'Outdoor Recreation'
};

const individualCompetitions = [
  {
    day: 'Tuesday',
    items: [
      {
        competition: '3 on 3 Basketball Tournament',
        division: 'High School Boys',
        location: 'Small Gym',
        participants: '4 players from each team color, including 1 substitute',
        details: "Single elimination half-court tournament. Games played to 11 points. Scoring is 1's and 2's. Championship game held Wednesday."
      },
      {
        competition: '3 on 3 Basketball Tournament',
        division: 'High School Girls',
        location: 'Small Gym',
        participants: '4 players from each team color, including 1 substitute',
        details: "Single elimination half-court tournament. Games played to 11 points. Scoring is 1's and 2's. Championship game held Wednesday."
      },
      {
        competition: '6 v 6 Dodgeball Tournament',
        division: 'Junior High Boys & Girls',
        location: 'Cottonwood',
        participants: '6 junior high students from each team color, minimum of 2 girls',
        details: 'Single elimination tournament.'
      },
      {
        competition: 'Settlers of Catan Tournament',
        division: 'All team colors',
        location: 'Activities Center',
        participants: '1 player from each team color',
        details: 'Board game tournament. Representative should have experience playing Catan and understand the basic rules. Two games with 4 players each play simultaneously. The 2 players with the most points from each table advance to Wednesday.'
      },
      {
        competition: 'Super Smash Bros Competition',
        division: 'All team colors',
        location: 'Activities Center',
        participants: '1 player from each team color',
        details: 'Smash Bros competition.'
      },
      {
        competition: 'Checkers Tournament',
        division: 'All team colors',
        location: 'Activities Center',
        participants: '1 player from each team color',
        details: 'Single-elimination checkers tournament.'
      }
    ]
  },
  {
    day: 'Wednesday',
    items: [
      {
        competition: '3 on 3 Basketball',
        division: "Boys' Championship Game",
        location: 'Small Gym',
        participants: 'Championship game',
        details: "Championship game from Tuesday's High School Boys 3 on 3 Basketball Tournament."
      },
      {
        competition: '3 on 3 Basketball',
        division: "Girls' Championship Game",
        location: 'Small Gym',
        participants: 'Championship game',
        details: "Championship game from Tuesday's High School Girls 3 on 3 Basketball Tournament."
      },
      {
        competition: 'Settlers of Catan',
        division: 'Championship Game',
        location: 'Activities Center',
        participants: 'Championship game',
        details: "Championship game from Tuesday's Settlers of Catan Tournament."
      },
      {
        competition: 'Mario Kart',
        division: 'All team colors',
        location: 'Activities Center',
        participants: '1 player from each team color',
        details: 'Needs confirmation: source details mention Smash Bros, which appears to be a copy/paste typo.'
      },
      {
        competition: 'Corn Hole Tournament',
        division: 'All team colors',
        location: 'Parking Lot',
        participants: '2 players from each team color',
        details: 'Single elimination Corn Hole tournament.'
      },
      {
        competition: 'UNO Tournament',
        division: 'All team colors',
        location: 'Activities Center',
        participants: '2 players from each team color',
        details: 'Two games with 8 players each play simultaneously. The top 4 players from each table advance to the championship game. It is possible for 2 players from the same team to make it to the championship game.'
      }
    ]
  }
];

const activityGroups = [
  {
    heading: "Activity Director's Dream Descriptions",
    items: [
      {
        title: 'Monday: Steal the Sock',
        label: '20 v 20 dream',
        quick: 'Students wear pool noodles down their shirts and try to pull socks off the other team.',
        bullets: [
          'Supplies: 40 pool noodles, 20 white socks, 20 black socks.',
          '20 students needed per match.',
          'Once a sock is pulled off, that student is eliminated.',
          'Leader note: this can get aggressive, so keep attitudes and sportsmanship in check.'
        ]
      },
      {
        title: 'Tuesday: Seven-Legged Monster',
        label: '28-student relay',
        quick: 'A multi-leg relay using a baton through tic-tac-toe, bucket stilts, cup stacking, scooters, sheet carry, PVC ball transport, and a final shot.',
        bullets: [
          'Each team must keep the baton with the main participant of each relay leg.',
          'If the baton is missing on a leg, that leg starts over.',
          'Use the listed order and keep students ready before their turn.',
          'This game needs quick transitions and clear leaders at each station.'
        ]
      },
      {
        title: 'Wednesday: Hungry Hippo',
        label: '16 students needed',
        quick: 'Students on scooters use baskets to collect balls while teammates push, pull, and gather.',
        bullets: [
          'Supplies: 4 scooters, 4 ropes, 4 helmets, 4 clothes baskets, and playground balls.',
          'Each team creates two squads with hippos, push/pullers, and a gatherer.',
          'Only balls that cross the team line may be gathered.',
          'Hippos must wear helmets and cannot go out twice in a row.'
        ]
      },
      {
        title: 'Thursday: Mega Relay',
        label: 'Final dream',
        quick: 'The final large-scale relay starts and finishes near Rec Field 4.',
        bullets: [
          'Use the <a href="assets/mega-relay-map.png" target="_blank" rel="noopener">Mega Relay map</a> for route and station locations.',
          'Keep teams moving quickly between stations.',
          'Leaders should help with positioning, pacing, and crowd control.'
        ]
      }
    ]
  },
  {
    heading: 'Team Competition Descriptions',
    items: [
      {
        title: 'Ultimate Field Basketball',
        label: 'Rec Field 4',
        quick: 'Ultimate Frisbee-style movement with basketball hoops as goals.',
        bullets: [
          'No running with the ball; players may pivot after catching.',
          'Defense may intercept or deflect but may not strip, tackle, or trip.',
          'If the ball legally hits the ground, it is an immediate turnover.',
          'Cabin leaders should sub players on the fly to involve as many students as possible.'
        ]
      },
      {
        title: 'Four Way Hockey',
        label: 'Cottonwood Pavilion',
        quick: 'Teams defend two goals while trying to score on the opposing goals with multiple pucks in play.',
        bullets: [
          'Each team has 12 students on the court, including two permitted goalies.',
          'No high sticks, no contact, and no stepping into the other team goal box.',
          'Be ready for middle school and high school rounds.'
        ]
      },
      {
        title: 'Melon Mayhem',
        label: 'Softball Diamond',
        quick: 'Slip-n-slide relay with a greased watermelon as the baton.',
        bullets: [
          'Only one person per team may be on the slip-n-slide at a time.',
          'The watermelon must be handed off, not thrown.',
          'No shoes or footwear on the slip-n-slide.',
          'If the watermelon breaks, that team immediately loses the round.'
        ]
      },
      {
        title: 'Water Balloon Volleyball',
        label: 'Outdoor Recreation',
        quick: 'Teams use bed sheets to catch and launch water balloons over the net.',
        bullets: [
          'Six people must hold each bed sheet at all times.',
          'Move together as a team to catch and throw the balloon.',
          'If the balloon pops on your side, the other team scores.',
          'Anything outside the sand is out of bounds.'
        ]
      }
    ]
  }
];

const menuDays = [
  {
    day: 'Monday',
    date: 'July 13',
    meals: [
      { name: 'Lunch', time: '12:00 PM-1:30 PM', items: ['Cold cuts, cheese, buns', 'Salad bar / beverage center', 'Assorted desserts'] },
      { name: 'Dinner', time: '5:15 PM / 6:00 PM', items: ['Chicken tenders', 'Potato chips', 'Potato salad', 'Mashed potatoes with cream gravy', 'Carrots with ranch packets', 'Baby carrots', 'Orange drink / water', 'Ice cream sandwich'] }
    ]
  },
  {
    day: 'Tuesday',
    date: 'July 14',
    meals: [
      { name: 'Breakfast', time: '7:30 AM / 8:15 AM', items: ['Cheese omelets', 'Sausage patties', 'Tater coins', 'French toast', 'Orange juice / water', 'Fruit Loops', 'Apples'] },
      { name: 'Lunch', time: '11:45 AM / 12:30 PM', items: ['Sloppy Joes with bun', 'French fries', 'Mixed vegetables', 'Pink lemonade / water', 'Rice Krispie treats'] },
      { name: 'Dinner', time: '5:00 PM / 5:45 PM', items: ['Hamburgers with bun', 'Hot dogs with bun', 'Au gratin potatoes', 'Broccoli', 'Lemonade / water', 'Sidekicks'] }
    ]
  },
  {
    day: 'Wednesday',
    date: 'July 15',
    meals: [
      { name: 'Breakfast', time: '7:30 AM / 8:15 AM', items: ['Scrambled eggs', 'Sausage links', 'Tater triangles', 'Pancakes', 'Apple juice / water', 'Cocoa Puffs', 'Banana'] },
      { name: 'Lunch', time: '11:45 AM / 12:30 PM', items: ['Pizza - two kinds', 'Waffle fries', 'Corn', 'Orange drink / water', 'Cookies'] },
      { name: 'Dinner', time: '5:00 PM / 5:45 PM', items: ['Mini corn dogs', 'Tater tots', 'California blend vegetables', 'Pink lemonade / water', 'Fudge bars'] }
    ]
  },
  {
    day: 'Thursday',
    date: 'July 16',
    meals: [
      { name: 'Breakfast', time: '7:30 AM / 8:15 AM', items: ['Breakfast ham', 'Biscuits and gravy', 'Potato cubes', 'Orange juice / water', 'Honey Nut Cheerios', 'Oranges'] },
      { name: 'Lunch', time: '11:45 AM / 12:30 PM', items: ['Chicken nuggets', 'French fries', 'Carrots', 'Lemonade / water', 'Brownie bites'] },
      { name: 'Dinner', time: '5:00 PM / 5:45 PM', items: ['Meat sauce', 'Bow tie pasta', 'Green beans', 'Breadsticks', 'Orange drink / water', 'Chocolate chip cookies'] }
    ]
  },
  {
    day: 'Friday',
    date: 'July 17',
    meals: [
      { name: 'Brunch', time: '8:30 AM / 9:15 AM', items: ['Cheese omelets', 'Sausage patties', 'Tater triangles', 'French toast sticks', 'Assorted juices / water', 'Rice Krispies', 'Banana'] }
    ]
  }
];

const highRopes = [
  {
    wristband: 'Green',
    day: 'Tuesday',
    time: '3:00 PM',
    note: 'Green paper wristbands',
    students: [
      ['Keliah Daga', '104-106', 'Evergreen Park-Maranatha Chapel'],
      ['Chisom Nwoye', '104-106', 'Evergreen Park-Maranatha Chapel'],
      ['Ruth Balinski', '112-114', 'Hanover Park-Evangel Assembly of God'],
      ['Alexis Mueller', '112-114', 'Hanover Park-Evangel Assembly of God'],
      ['Nicholas Gilgenberg', '302', 'McHenry-Maranatha AG'],
      ['Hugo VanEvery', '304', 'La Grange Highlands-Hope Church'],
      ['Peyton Haynes', '401-403', 'Chicago-Chicago Tabernacle AG'],
      ['Kaylie Yates', '410-412', 'Bethalto-Cornerstone Church'],
      ['Hadassah Hobson', '414-416', 'Bethalto-Cornerstone Church'],
      ['Hannah Hobson', '414-416', 'Bethalto-Cornerstone Church'],
      ['Zion Hobson', '414-416', 'Bethalto-Cornerstone Church'],
      ['Caroline Nitecki', '414-416', 'Bethalto-Cornerstone Church'],
      ['Savannah Nitecki', '414-416', 'Bethalto-Cornerstone Church'],
      ['Emma Brooks', '418-420', 'Bethalto-Cornerstone Church'],
      ['Eddie-Beth Rushing', '418-420', 'Bethalto-Cornerstone Church'],
      ['Josslyn Snively', '418-420', 'Bethalto-Cornerstone Church'],
      ['Victoria Nance', '419-421', 'Greenville-The Bridge'],
      ['Amber Billington', '517-519', 'La Grange Highlands-Hope Church'],
      ['Baylee West', '521-523', 'Carrollton-LifePoint Church'],
      ['Izabella Perez', '601-603', 'Hanover Park-Evangel Assembly of God'],
      ['Lily Niccum', '605-607', 'Marengo-First Assembly'],
      ['Dallon Denum', '606-608', 'Camp Point-Assembly of God'],
      ['Gabriel Howard', '606-608', 'Camp Point-Assembly of God'],
      ['Elijah Manock', '606-608', 'Camp Point-Assembly of God'],
      ['Clara Anderson', '613-615', 'Rock Falls-Rock River Christian Center'],
      ['Jhaylee Burton', '617-619', 'Pekin-City Church'],
      ['Julianna Hill', '617-619', 'Pekin-City Church'],
      ['Elaina Jurden', '617-619', 'Pekin-City Church'],
      ['Chidi Nwoye', 'C-03', 'Evergreen Park-Maranatha Chapel'],
      ['Chinonso Nwoye', 'C-03', 'Evergreen Park-Maranatha Chapel'],
      ['Maximilian Rodriguez', 'C-07', 'Chicago-Chicago Tabernacle AG'],
      ['Gavin Mercado', 'C-09', 'Chicago-Chicago Tabernacle AG'],
      ['Jaxsyn Raynor', 'C-10', 'Bethalto-Cornerstone Church'],
      ['Liam Womack', 'C-10', 'Bethalto-Cornerstone Church'],
      ['Karson West', 'C-11', 'Bethalto-Cornerstone Church'],
      ['Mauricio Osorio', 'C-13', 'Carlinville-First AG'],
      ['Braxton West', 'C-13', 'Carrollton-LifePoint Church'],
      ['Spencer Nance', 'C-14', 'Greenville-The Bridge']
    ]
  },
  {
    wristband: 'Yellow',
    day: 'Wednesday',
    time: '3:00 PM',
    note: 'Yellow paper wristbands',
    students: [
      ['Norie Campbell', '117-119', 'Morton-Elevate Church'],
      ['Ameilia Dunbar', '117-119', 'Morton-Elevate Church'],
      ['June Lyons', '117-119', 'Morton-Elevate Church'],
      ['Emily Schrock', '117-119', 'Morton-Elevate Church'],
      ['Parker Weiler', '117-119', 'Morton-Elevate Church'],
      ['Kaylee Bavender', '215-217', 'Marion-Abundant Life Assembly'],
      ['Kenley Bavender', '215-217', 'Marion-Abundant Life Assembly'],
      ['Jovee Hansen', '216-218', 'Springfield-Calvary Church'],
      ['Evelyn Thomas', '405', 'Springfield-Radiant Church'],
      ['Delilah Green', '422-424', 'Quincy-Faith Assembly of God'],
      ['Braelynn Ranabargar', '422-424', 'Quincy-Faith Assembly of God'],
      ['Zariah Wierschem', '422-424', 'Quincy-Faith Assembly of God'],
      ['Kenneth Mondon', '506-508', 'Quincy-Faith Assembly of God'],
      ['Strife Collier', '522-524', 'Marion-Abundant Life Assembly'],
      ['Mathew Ferguson', '522-524', 'Marion-Abundant Life Assembly'],
      ['Ruben DePinto', '602-604', 'Morton-Elevate Church'],
      ['Zayne Heyl', '602-604', 'Morton-Elevate Church'],
      ['Peter Lyons', '602-604', 'Morton-Elevate Church'],
      ['Atticus McKinley', '602-604', 'Morton-Elevate Church'],
      ['Isaac Sanders', '602-604', 'Morton-Elevate Church'],
      ['Aarik Lewis', '610-612', 'Quincy-Bethel AG'],
      ['Matthias Oloyede', '610-612', 'Springfield-Calvary Church'],
      ['Luke Stuemke', '610-612', 'Springfield-Calvary Church'],
      ['Kenyon Mata', '628', 'Charleston-Praise Assembly of God'],
      ['Madison Sanders', '704', 'Pekin - North Parkway AG'],
      ['Catherine Davis', '708', 'Pekin - North Parkway AG'],
      ['Kailyn Dennis', '708', 'Pawnee-Assembly of God'],
      ['Mia Sams', '708', 'Pawnee-Assembly of God'],
      ['Khloe Brown', '710', 'Springfield-Calvary Church'],
      ['Mason Maher', 'C-01', 'Antioch-Christian Life Fellowship'],
      ['Lloyd Mallak', 'C-01', 'Antioch-Christian Life Fellowship'],
      ['Jayden Mendez', 'C-01', 'Antioch-Christian Life Fellowship'],
      ['Alexander Hires', 'C-02', 'Rock Falls-Rock River Christian Center'],
      ['Colton Bornes', 'C-06', 'Brighton-Brighton AG'],
      ['Richard Johnson', 'C-17', 'Marengo-First Assembly'],
      ['Travis Velasquez', 'C-17', 'Marengo-First Assembly'],
      ['Samuel Nessler', 'C-20', 'Springfield-Calvary Church'],
      ['Vincent Roughley', 'C-20', 'Springfield-Calvary Church']
    ]
  },
  {
    wristband: 'Blue',
    day: 'Thursday',
    time: '3:00 PM',
    note: 'Blue paper wristbands',
    students: [
      ['Micah Enolva', '97', 'Mount Prospect-Northwest AG'],
      ['Caleb McMillan', '97', 'Mount Prospect-Northwest AG'],
      ['Caleb McClusky', '107', 'Bloomington-New Life Fellowship Church'],
      ['Cristal Bautista', '116-118', 'Lake Zurich-The Hope Collective'],
      ['Sophia Santana', '116-118', 'Lake Zurich-The Hope Collective'],
      ['Cally McClusky', '203-205', 'Bloomington-New Life Fellowship Church'],
      ['Shine Bougher', '207-209', 'Manhattan-Thrive Church'],
      ['Arisa Reardanz', '207-209', 'Diamond-Christian Life AG'],
      ['Kyla Stark', '207-209', 'Diamond-Christian Life AG'],
      ['Victoria Rojek', '621', 'Mount Prospect-Northwest AG'],
      ['Cristian Bautista', '622-624', 'Lake Zurich-The Hope Collective'],
      ['Carson Reuber', '622-624', 'Morton-Elevate Church'],
      ['Jason Sfire', '622-624', 'Lake Zurich-The Hope Collective'],
      ['Jaxon Sfire', '622-624', 'Lake Zurich-The Hope Collective'],
      ['Addyson Price', '715', 'Morton-Elevate Church'],
      ['Stella Wilson', '715', 'Morton-Elevate Church'],
      ['Veronica Vargas', '718', 'Urbana-Stone Creek Church'],
      ['Leah Strauss', '721', 'Morton-Elevate Church'],
      ['Ezra Elder', 'C-08', 'Quincy-Faith Assembly of God'],
      ['Bronson Mondon', 'C-08', 'Quincy-Faith Assembly of God'],
      ['Kristian Mondon', 'C-08', 'Quincy-Faith Assembly of God'],
      ['Peyton Richmiller', 'C-08', 'Quincy-Faith Assembly of God'],
      ['Grayson Schmidt', 'C-08', 'Quincy-Faith Assembly of God'],
      ['Jacob Sexton', 'C-08', 'Quincy-Faith Assembly of God'],
      ['Jonathan Carpenter', 'C-12', 'Urbana-Stone Creek Church'],
      ['Tanner Hastings', 'C-12', 'Urbana-Stone Creek Church'],
      ['Noah Polk', 'C-12', 'Urbana-Stone Creek Church'],
      ['Andrew Bougher', 'C-15', 'Manhattan-Thrive Church'],
      ['Jace Gillum', 'C-15', 'Diamond-Christian Life AG'],
      ['Nathan Klawes', 'C-15', 'Manhattan-Thrive Church'],
      ['Anna Prichard', 'West Lounge', 'Morton-Elevate Church']
    ]
  }
];

const resources = [
  { title: 'Camp Manual', detail: 'Open Google Doc', href: 'https://docs.google.com/document/d/1u5XWfX2akUAvLmDvOFkI9HONCMnuoAXQcxzNeORFZKE/edit?usp=sharing' },
  { title: 'Give to STL', detail: 'Open giving link', href: 'https://o2o.to/i/UJ20EOLMKTGZ' },
  { title: 'Register for Alive Conference', detail: 'Open registration link', href: 'https://o2o.to/i/052V68WEJCD7' },
  { title: 'How to Get a Crown Room', detail: 'Open checklist PDF', href: 'files/crown-room-checklist.pdf' },
  { title: 'Room Report Card Example', detail: 'Open image', href: 'files/room-report-card-example.png' },
  { title: 'Arrival Info', detail: 'Open check-in PDF', href: 'files/arrival-info.pdf' },
];
