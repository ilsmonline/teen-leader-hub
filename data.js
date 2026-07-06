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
    ['2:50 PM', 'Support Staff Meeting - Schneider Ctr Clark Rm', 'all'],
    ['3:30 PM', 'Team Meeting at Team Flag', 'all'],
    ['4:00 PM', 'ADD - Guys: Auditorium; Girls: Schneider Center', 'all'],
    ['5:00 PM', 'Camp Director Dismissal - Girls: Auditorium; Guys: Schneider Center', 'all'],
    ['5:15 PM', 'Dinner - Dining Hall', 'green-blue-pink-red'],
    ['6:00 PM', 'Dinner - Dining Hall', 'orange-purple-yellow-gray'],
    ['6:15 PM', 'Pre-Service Prayer - Auditorium', 'all'],
    ['7:00 PM', 'Evening Rally 1 - Auditorium', 'green-blue-pink-red'],
    ['7:00 PM', 'Cafe, Activities & Store - AC', 'orange-purple-yellow-gray'],
    ['7:00 PM', 'New Cabin Leader 101 - Upstairs AC', 'green-blue-pink-red'],
    ['7:30 PM', 'Team Captain Meeting - Schneider Center, Clark Room', 'all'],
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
  { role: 'Director', name: 'Mark Valkanet', phone: '(224) 715-5951', photo: 'photos/mark-valkanet.jpg' },
  { role: 'Director', name: 'Samantha Landrus', phone: '(217) 232-1980', photo: 'photos/Samantha-Landrus.jpg' },
  { role: 'Student Director (Male Dean)', name: 'Luke Marsiglio', phone: '(515) 771-8415', photo: 'photos/luke-marsiglio.jpg' },
  { role: 'Student Director (Male Dean)', name: 'Ethan Mills', phone: '(281) 967-0325', photo: 'photos/Ethan-Mills.jpg' },
  { role: 'Student Director (Female Dean)', name: 'Abigail Marsiglio', phone: '(914) 513-1931', photo: 'photos/abigail-marsiglio.jpg' },
  { role: 'Student Director (Female Dean)', name: 'Heide Woodward', phone: '(217) 274-5900', photo: 'photos/Heide Woodward.jpg' }
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
    date: 'July 6',
    meals: [
      { name: 'Lunch', time: '11:30 AM-1:00 PM', items: ['Cold cuts, cheese, buns', 'Salad bar / beverage center', 'Assorted desserts'] },
      { name: 'Dinner', time: '5:15 PM / 6:00 PM', items: ['Chicken tenders', 'Potato chips', 'Potato salad', 'Mashed potatoes with cream gravy', 'Carrots with ranch packets', 'Baby carrots', 'Orange drink / water', 'Ice cream sandwich'] }
    ]
  },
  {
    day: 'Tuesday',
    date: 'July 7',
    meals: [
      { name: 'Breakfast', time: '7:30 AM / 8:15 AM', items: ['Cheese omelets', 'Sausage patties', 'Tater coins', 'French toast', 'Orange juice / water', 'Fruit Loops', 'Apples'] },
      { name: 'Lunch', time: '11:45 AM / 12:30 PM', items: ['Sloppy Joes with bun', 'French fries', 'Mixed vegetables', 'Pink lemonade / water', 'Rice Krispie treats'] },
      { name: 'Dinner', time: '5:00 PM / 5:45 PM', items: ['Hamburgers with bun', 'Hot dogs with bun', 'Au gratin potatoes', 'Broccoli', 'Lemonade / water', 'Sidekicks'] }
    ]
  },
  {
    day: 'Wednesday',
    date: 'July 8',
    meals: [
      { name: 'Breakfast', time: '7:30 AM / 8:15 AM', items: ['Scrambled eggs', 'Sausage links', 'Tater triangles', 'Pancakes', 'Apple juice / water', 'Cocoa Puffs', 'Banana'] },
      { name: 'Lunch', time: '11:45 AM / 12:30 PM', items: ['Pizza - two kinds', 'Waffle fries', 'Corn', 'Orange drink / water', 'Cookies'] },
      { name: 'Dinner', time: '5:00 PM / 5:45 PM', items: ['Mini corn dogs', 'Tater tots', 'California blend vegetables', 'Pink lemonade / water', 'Fudge bars'] }
    ]
  },
  {
    day: 'Thursday',
    date: 'July 9',
    meals: [
      { name: 'Breakfast', time: '7:30 AM / 8:15 AM', items: ['Breakfast ham', 'Biscuits and gravy', 'Potato cubes', 'Orange juice / water', 'Honey Nut Cheerios', 'Oranges'] },
      { name: 'Lunch', time: '11:45 AM / 12:30 PM', items: ['Chicken nuggets', 'French fries', 'Carrots', 'Lemonade / water', 'Brownie bites'] },
      { name: 'Dinner', time: '5:00 PM / 5:45 PM', items: ['Meat sauce', 'Bow tie pasta', 'Green beans', 'Breadsticks', 'Orange drink / water', 'Chocolate chip cookies'] }
    ]
  },
  {
    day: 'Friday',
    date: 'July 10',
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
      ['Makenna Huntman', '103-105', 'Columbia-Life Community Church'],
      ['Carly Sommerfield', '103-105', 'Columbia-Life Community Church'],
      ['Kaylee Rein', '116-118', 'Columbia-Life Community Church'],
      ['Ashton Middendorp', '302', 'Clinton, IA-River Church'],
      ['Owen Thomson', '306', 'Clinton, IA-River Church'],
      ['Lucy Rauschenberger', '410-412', 'Columbia-Life Community Church'],
      ['Brooklyn Mauch', '414-416', 'Peru-Faith AG'],
      ['Elizabeth Adams', '422-424', 'Sycamore-Bethel AG'],
      ['Hannah Adams', '422-424', 'Sycamore-Bethel AG'],
      ['Pepper Watie', '422-424', 'Sycamore-Bethel AG'],
      ['Fynnley Booth', '517-519', 'Pittsfield-Assembly of God'],
      ['Caine Geralds', '518-520', 'Columbia-Life Community Church'],
      ['Soleil Windsor', '521-523', 'Sandwich-Harvest Chapel'],
      ['Jonah Booth', '522-524', 'Pittsfield-Assembly of God'],
      ['Jake Puterbaugh', '522-524', 'Pittsfield-Assembly of God'],
      ['Annabelle Kumah', '613-615', 'Bolingbrook-Living Water Community Church'],
      ['Jayden Devine', '618-620', 'Sycamore-Bethel AG'],
      ['Cody Bauer', '624', 'Minier-Assembly of God'],
      ['Owen Geralds', '626-628', 'Columbia-Life Community Church'],
      ['Samuel Laue', '626-628', 'Columbia-Life Community Church'],
      ['Max Powles', '626-628', 'Columbia-Life Community Church'],
      ['Collin Reimann', '626-628', 'Columbia-Life Community Church'],
      ['Malikkih Voelkel', '626-628', 'Columbia-Life Community Church'],
      ['Liam Weber', '626-628', 'Columbia-Life Community Church'],
      ['Andrew WEGESCHEIDE', '626-628', 'Columbia-Life Community Church'],
      ['Judy Furlong', '701', 'Alton-Abundant Church'],
      ['Aryiah Barragan', '705', 'Clinton, IA-River Church'],
      ['Laney Giuliani', '705', 'Clinton, IA-River Church'],
      ['Anna McCallister', '705', 'Clinton, IA-River Church'],
      ['Kennedy Schwandt', '705', 'Clinton, IA-River Church'],
      ['Zoey Gilbert', '718', 'New Lenox-The Journey Church'],
      ['Isaiah Smith', 'C-05', 'Alton-Abundant Church'],
      ['Nathan Fetterman', 'C-07', 'Bolingbrook-Living Water Community Church'],
      ['Gavin Creger', 'C-08', 'Sandwich-Harvest Chapel'],
      ['Rocco Talarico', 'C-10', 'Sandwich-Harvest Chapel'],
      ['Steve Fiamafle', 'C-16', 'Dekalb-City Light Church'],
      ['Brayden Miller', 'C-16', 'Dekalb-City Light Church'],
      ['Gavin Marshall', 'C-17', 'Washington-Connect Church'],
      ['Samuel Mcgee', 'C-18', 'Oak Brook-Oak Brook Community Church'],
      ['Izaak Lane', 'C-21', 'New Lenox-The Journey Church']
    ]
  },
  {
    wristband: 'Yellow',
    day: 'Wednesday',
    time: '3:00 PM',
    note: 'Yellow paper wristbands',
    students: [
      ['Kyleigh Culleton', '104-106', 'Columbia-Life Community Church'],
      ['Adalynn Luther', '104-106', 'Columbia-Life Community Church'],
      ['Lexi Moore', '104-106', 'Columbia-Life Community Church'],
      ['Kate Scalise', '104-106', 'Columbia-Life Community Church'],
      ['Hailey Handler', '216-218', 'Glen Carbon-New Hope Church'],
      ['Blair Eardley', '220-222', 'Glen Carbon-New Hope Church'],
      ['Ivy Obrecht', '224-226', 'Glen Carbon-New Hope Church'],
      ['Lily Robinson', '224-226', 'Glen Carbon-New Hope Church'],
      ['Edinam Kraka', '419-421', 'Glen Carbon-New Hope Church'],
      ['Kaidence Sanchez', '501-503', 'Morris-Peace Chapel'],
      ['Zoey Huggins', '506-508', 'Moline-New Life Fellowship'],
      ['Ty Books', '610-612', 'Glen Carbon-New Hope Church'],
      ['Payton Jones', '617-619', 'Clinton, IA-River Church'],
      ['Izzy Lawson', '617-619', 'Clinton, IA-River Church'],
      ['Emery Smith', '617-619', 'Clinton, IA-River Church'],
      ['Payton Coronado', '621-623', 'Clinton, IA-River Church'],
      ['Caelyn Dunham', '621-623', 'Clinton, IA-River Church'],
      ['Alleana Perez', '621-623', 'Clinton, IA-River Church'],
      ['Mariah St.Clair', '706', 'Mattoon-The Fields Church'],
      ['Emery Davis', '707', 'Clinton, IA-River Church'],
      ['Maggie Foust', '707', 'Clinton, IA-River Church'],
      ['Audrey Morris', '708', 'Mattoon-The Fields Church'],
      ['Elly Duncan', '709', 'Clinton, IA-River Church'],
      ['Ariaunna Mullins', '709', 'Clinton, IA-River Church'],
      ['Charlie Poorman', '710', 'Mattoon-The Fields Church'],
      ['Kimberly Siefferman', '710', 'Mattoon-The Fields Church'],
      ['Roe Lonergan', '711', 'Clinton, IA-River Church'],
      ['Sophia Morrow', '711', 'Clinton, IA-River Church'],
      ['Reya Boyer', '712', 'Mattoon-The Fields Church'],
      ['Stephany Kakozi', '717', 'Moline-New Life Fellowship'],
      ['Landon Hermeyer', 'C-11', 'Princeton-The People Church'],
      ['Cody Stalter', 'C-11', 'Princeton-The People Church'],
      ['Ezra Tibbitts', 'C-11', 'Princeton-The People Church'],
      ['London Allison', 'C-12', 'Mattoon-The Fields Church'],
      ['Hayden Basham', 'C-12', 'Mattoon-The Fields Church'],
      ['Kaiden Eckley', 'C-12', 'Mattoon-The Fields Church'],
      ['Jack Maninfior', 'C-12', 'Mattoon-The Fields Church'],
      ['Silas Och', 'C-12', 'Morris-Peace Chapel'],
      ['Devlin Janes', 'C-24', 'Mattoon-The Fields Church']
    ]
  },
  {
    wristband: 'Blue',
    day: 'Thursday',
    time: '3:00 PM',
    note: 'Blue paper wristbands',
    students: [
      ['Charlotte Wheatley', '117-119', 'Columbia-Life Community Church'],
      ['Hannah Zobrist', '117-119', 'Columbia-Life Community Church'],
      ['Lily Luther', '204-206', 'Columbia-Life Community Church'],
      ['Stella Zobrist', '208-210', 'Columbia-Life Community Church'],
      ['Lane Osborn', '303', 'Mattoon-The Fields Church'],
      ['Luke Taggart', '303', 'Mattoon-The Fields Church'],
      ['Colten Beabout', '305', 'Mattoon-The Fields Church'],
      ['Jonathan Brown', '305', 'Mattoon-The Fields Church'],
      ['Kyden Hudson', '305', 'Mattoon-The Fields Church'],
      ['Jackson Williamson', '305', 'Mattoon-The Fields Church'],
      ['Beckett Hild', '307', 'Mattoon-The Fields Church'],
      ['Bryson Lucier', '307', 'Mattoon-The Fields Church'],
      ['Kaydence Kenney', '406-408', 'Champaign-Meadowbrook CC'],
      ['Walela Ray', '406-408', 'Champaign-Meadowbrook CC'],
      ['Julia Rasmussen', '513-515', 'Forest City-Forest City Community Church'],
      ['Parker Koogler', '526-528', 'Columbia-Life Community Church'],
      ['Gunnar Webb', '526-528', 'Columbia-Life Community Church'],
      ['Jett Latchem', '606-608', 'Columbia-Life Community Church'],
      ['Jude Latchem', '606-608', 'Columbia-Life Community Church'],
      ['Kruz Latchem', '606-608', 'Columbia-Life Community Church'],
      ['Sam Morris', '606-608', 'Columbia-Life Community Church'],
      ['Elias Overall', '606-608', 'Columbia-Life Community Church'],
      ['Jolie Siefferman', '702', 'Mattoon-The Fields Church'],
      ['Savanah Fayhee', '704', 'Mattoon-The Fields Church'],
      ['Raylynne Holdren', '704', 'Mattoon-The Fields Church'],
      ['Shelby Nichols', '704', 'Mattoon-The Fields Church'],
      ['Silas Jenkins', 'C-01', 'Champaign-Meadowbrook CC'],
      ['Colby White', 'C-02', 'Mattoon-The Fields Church'],
      ['Aaron Malone', 'C-04', 'Carbondale-Calvary Campus Church'],
      ['Asher Malone', 'C-04', 'Carbondale-Calvary Campus Church'],
      ['Brett Speagle', 'C-04', 'Decatur-Glad Tidings Assembly'],
      ['Jacob Parker', 'C-09', 'Mattoon-The Fields Church'],
      ['Grant Rasmussen', 'C-14', 'Forest City-Forest City Community Church']
    ]
  }
];

const resources = [
  { title: 'Camp Manual', detail: 'Open Google Doc', href: 'https://o2o.to/i/2DvTRc' },
  { title: 'Give to STL', detail: 'Open giving link', href: 'https://o2o.to/i/UJ20EOLMKTGZ' },
  { title: 'Register for Alive Conference', detail: 'Open registration link', href: 'https://o2o.to/i/052V68WEJCD7' },
  { title: 'How to Get a Crown Room', detail: 'Open checklist PDF', href: 'files/crown-room-checklist.pdf' },
  { title: 'Room Report Card Example', detail: 'Open image', href: 'files/room-report-card-example.png' },
  { title: 'Arrival Info', detail: 'Open check-in PDF', href: 'files/arrival-info.pdf' },
];
