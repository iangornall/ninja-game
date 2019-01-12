# Ninja vs Zombies (in Space)

## Live Demo
[Ninja vs. Zombies (in Space)](https://iangornall.github.io/ninja-game/)

## Contents
  * Description
  * Technologies
  * Challenges and Solutions
  * MVP
  * Our Stretch Goals

## Description

This is a project created with the intention of learning how to build a video game in the browser using modern web technologies.  The project is built using webpack in Node for development and creating builds.  The game is built using the new Phaser 3 library.

This is a completely INDEPENDENT project.  I (Ian Gornall) worked on this on my own.

The project can be compiled and run using webpack.  Be sure to install the dependencies using npm first.

### Features

### Scenes
Scenes are built with Phaser's scene manager.  The loading screen displays the progress made in loading assets prior to starting the game.  This transitions to the level 1 scene once all the assets are loaded.

### Maps
Level maps are loaded from JSON files created with Tiled and associated spritesheets generated by Leshy SpriteSheet Tool.

### Hero and Enemy Sprites
Sprites are loaded from atlas's.  Sprites have multiple associated animations and audio effects.

### Collision mapping
Colliders are set based on different tilemap layers and sprites.

### Moveable Tiles
Some tiles are loaded as sprites so that they can be moved by the character, e.g. blocks.

### Enemy paths
Enemy paths are loaded from objects in Tiled and coded within the game logic.

### Hero can throw shurikens
Shurikens are created and thrown by the Hero on the tap of the spacebar.

### Enemies can be killed
Enemies are killed by shopting them with shurikens 5 times.
Enemy death triggers a tween that scales the enemy upwards and fades it out.

### Hero can be killed
When the hero touches certain objects, e.g. enemies, spikes, the level restarts.

## Technologies
  * JavaScript (ES6)
  * Phaser 3
  * Webpack
  * Node

## Challenges and Solutions
This is my first major solo project.  

  * Challenge #1: Staying motivated

  It's hard to stay motivated on an independent project.  Sharing the project with others helped to keep the motivation going.
  
  * Challenge #2: Learning Phaser 3

  Phaser 3 is a huge library and the documents are difficult to read.  There are few tutorials on Phaser 3 because it simply has not been around as long as Phaser 2.  However, it is the more modern library with better features.  I was able to compile information from many different articles to learn the elements you see in this game.

  * Challenge #3: Scene management

  I used some heavy assets in this game, with high resolution sprites and maps.  Thus, I wanted to include a loading screen.  I found a good tutorial on this, but it seemed unnecessarily complicated, with basically a preload scene and a load scene.  I was able to dig through the docs and find a way to load the necessary logo prior within the loading scene prior to loading other assets.  That eliminated the need for a preload scene and made the code more elegant

  * Challenge #4: Argh!  I keep falling through the floor!

  A huge frustration occurred because I was using such large tiles and sprites.  My ninja kept falling through the floor whenever it landed with a great amount of velocity.  Once again I had to dig through the Phaser 3 documentation.  I found a setting for the arcade physics configuration called TileBias.  Setting this higher prevented my character from falling through objects.

  * Challenge #5: Zombies out of control!
  
  One big challenge was when I put the zombies in the game.  I wanted them to move along a set path, but not have to hard code the path for each one.  I was able to set a rectangle object using tiled, and use the dimensions of that rectangle to set the enemies' paths.

  * Challenge #6: Zombies never die!
  
  A huge issue for me was when I put a death tween on the zombie, the zombie would disappear from view, but was still an active object on the screen colliding with our hero.  To fix this I had to remove the physical presence of the zombie at the beginning of the tween and then the display as well at the end of the tween so it was completely removed from the scene.  I was able to find several functions that could be set on the tween to run at different times.

## MVP (Minimum Viable Product)
Since this was a project primarily designed to learn the phaser framework, at minimum I wanted a game where a user could control the movement of a character

Our initial MVP included:
* Character movement controlled by user input
* Map loading
* Character properly colliding with tiles on map.

## Our Stretch Goals
Once I had the MVP, I realized a number of additional goals:
* Adding enemies with fixed paths
* Adding shuriken weapon
* Setting game logic to kill enemies
* Adding a loader screen
* Adding sound effects and music
* Adding a death tween
* Adding moveable tiles

My future goals
* Fix movement of moveable tiles
* Fix some of the tile edges
* Remake level 1
* Make additional levels
* Make game responsive to different sized devices
* Deploy to app store

## Author
  * [Ian Gornall](https://github.com/iangornall/)
