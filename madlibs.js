function madlibs() {
  let selectedStory = prompt("Please type which story you'd like. Story One or Story Two?");
  if (selectedStory === "story one") {
    storyOne();
  } else if (selectedStory === "story two") {
    storyTwo();
  } else {
    alert("invalid, please type 'story one' or 'story two'")
  }
  function storyOne() {
    let adj1 = prompt("type an adjective");
    let place_1 = prompt("type a general place");
    let vehicle_1 = prompt("type a vehicle name (plural)");
    let game_1 = prompt("type the name of a game");
    let noun_1 = prompt("type a plural noun");
    let verb_1 = prompt("type an 'ing' verb");
    let verb_2 = prompt("type another 'ing' verb");
    let food_1 = prompt("type a food name (plural)");
    let sport_1 = prompt("type the name of a sport");
    let verb_3 = prompt("type another 'ing' verb");
    let emotion = prompt("type an emotion");
    let number = prompt("type a number");
    let story_one_completed = alert(`A vacation is when you take a trip to some '${adj1}' place near an amazing '${place_1}'. A good vacation place is one where you can ride '${vehicle_1}' or play '${game_1}' or go hunting for '${noun_1}'. I like to spend my time '${verb_1}' or '${verb_2}'. When parents go on a vacation, they spend their time eating three '${food_1}' a day. Usually, fathers play '${sport_1}', and mothers spend their time '${verb_3}'. Adults need vacations more than kids because adults are always very '${emotion}' because they have to work '${number}' hours every day all year just to afford their vacations!`);
  }

  function storyTwo() {
    let adj_11 = prompt("type an adjective");
    let place_2 = prompt("type a famous place");
    let noun_2 = prompt("type a plural noun");
    let adj_2 = prompt("type another adjective");
    let food_2 = prompt("type a food (plural)");
    let emotion_2 = prompt("type an emotion");
    let verb_4 = prompt("type an 'ing' verb");
    let place_3 = prompt("type a common place");
    let adj_3 = prompt("type another adjective");
    let noun_3 = prompt("type a noun");
    let adj_4 = prompt("type another adjective");
    let noun_4 = prompt("type another noun");
    let family = prompt("type a family member");
    let adj_5 = prompt("type another adjective");
    let story_two_completed = alert(`Today we took a '${adj_11} fieldtrip to '${place_2}'. They're famous for making '${noun_2}' cooking '${adj_2}' '${food_2}. Eating all that food mad made me feel '${emotion_2}'. Next we enjoyed the local tradition of '${verb_4}' in the middle of the '${place_3}'! Finally, we went shopping for souvenirs. I bought a '${adj_3}' '${noun_3}' for myself, and a '${adj_4}' '${noun_4}' for ny favorite '${family}'. I'll definitely never forget this '${adj_5}' trip!`)
  }
}
madlibs();