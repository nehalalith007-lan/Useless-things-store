function addToCart(itemName) {
  const funnyMessages = [
    `Thank you for purchasing "${itemName}"! Your pigeon is already on the way.`,
    `Your "${itemName}" will be carefully wrapped in a tortilla for safety.`,
    `We have no idea why you bought "${itemName}", but we love it.`,
    `The "${itemName}" is now yours. Our warehouse guy is crying.`,
    `Expect "${itemName}" to arrive sometime before the next ice age.`
  ];

  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  alert(randomMessage);
}