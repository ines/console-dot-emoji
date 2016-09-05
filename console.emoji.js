/**
 *  console.emoji — Custom Console Logging with Emoji
 *
 *  inspired by & adapted from console.frog by Tim Holman
 *  https://github.com/tholman/console-dot-frog/
 *
 *  MIT licensed
 *
 */

// Define your custom commands and emoji
const commands = [
    { emoji: '🦄', name: 'unicorn' },
    { emoji: '🍕', name: 'pizza' },
    { emoji: '🍺', name: 'beer' },
    { emoji: '💩', name: 'poo' }
];

{
    // Create custom commands
    commands.forEach(command => window.console[command.name] = (...args) => console.log(command.emoji + ' ' + args.join(', ')));
}

// Log to the console!
console.unicorn("Magical!");
console.beer("Cheers!");
console.pizza("Tasty!");
console.poo("Oh f*ck!");
