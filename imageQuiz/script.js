const debugEl = document.getElementById('debug');
const iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
const icon_height = 79;
const num_icons = 9;
const time_per_icon = 100;
const indexes = [0, 0, 0];

function roll(reel, offset = 0) {
  const delta = (offset + 2) * num_icons + Math.floor(Math.random() * num_icons);

  return new Promise((resolve, reject) => {
    const style = reel.style;
    const backgroundPositionY = parseFloat(style.backgroundPositionY);
    const targetBackgroundPositionY = backgroundPositionY + delta * icon_height;
    const normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);

  });
}

setTimeout(rollAll, 1000);
