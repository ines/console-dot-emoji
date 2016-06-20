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
var commands = [
    [ "unicorn", "🦄" ],
    [ "pizza", "🍕" ],
    [ "beer", "🍺"],
    [ "poo", "💩"]
];

(function() {
    if(!window.console) return;

    // Create custom commands
    commands.forEach(function(command) {
        window.console[command[0]] = function() {

            // Get arguments as a string
            var args = Array.prototype.slice.call(arguments).toString().split(',').join(', ');

            // Log to the console with emoji
            console.log(command[1] + "  " + args);
        }
    });
})();

// Log to the console!
console.unicorn("Magical!");
console.beer("Cheers!");
console.pizza("Tasty!");
console.poo("Oh f*ck!");
