class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // Load any necessary assets here
    }

    create ()
    {
        // Set the background color to black
        this.cameras.main.setBackgroundColor('#000000');

        // Word banks
        this.letterWordBank = ['apple', 'bear', 'cat', 'dog', 'ear', 'fan', 'gate', 'hat', 'ice', 'jar', 'kite', 'lamp', 'moon', 'nest', 'owl', 'pen', 'queen', 'rat', 'sun', 'tree', 'urn', 'vase', 'wax', 'yarn', 'zebra', 'boat', 'cake', 'desk', 'egg', 'frog', 'gold', 'hill', 'ink', 'jam', 'key', 'leaf', 'mask', 'nut', 'ox', 'pig', 'quiz', 'ring', 'snake', 'tent', 'unit', 'van', 'well', 'year', 'zero', 'arch', 'band', 'cool', 'drum', 'echo', 'flag', 'glow', 'hero', 'idol', 'jack', 'king', 'lake', 'mist', 'neon', 'oak', 'pond', 'quest', 'road', 'sail', 'tail', 'union', 'vase', 'wave', 'yawn', 'zip', 'art', 'bell', 'cart', 'dew', 'elk', 'fame', 'game', 'harp', 'iron', 'jet', 'knot', 'loop', 'mop', 'nest', 'open', 'pond', 'rest', 'sky', 'tool', 'up', 'view', 'win', 'yard', 'zoom', 'ash', 'bold', 'cream', 'dive', 'edge', 'fern', 'goat', 'horn', 'ink', 'joke', 'kite', 'lark', 'mint', 'nose', 'oat', 'pearl', 'quiz', 'rope', 'spin', 'task', 'urge', 'vine', 'wing', 'yard', 'zone', 'brave', 'climb', 'drop', 'eager', 'flute', 'grasp', 'hook', 'iron', 'jump', 'knee', 'leaf', 'mark', 'noise', 'open', 'plane', 'quest', 'rope', 'shape', 'track', 'upper', 'vast', 'wide', 'yellow', 'zany', 'argue', 'bloom', 'craft', 'dream', 'eager', 'flame', 'ghost', 'hope', 'ideal', 'jump', 'keen', 'laugh', 'mouse', 'nap', 'ocean', 'patch', 'quilt', 'risk', 'sharp', 'trip', 'ugly', 'valley', 'whale', 'youth', 'zebra', 'army', 'bloom', 'carry', 'drift', 'enter', 'flip', 'grape', 'hinge', 'ivory', 'join', 'kneel', 'leap', 'march', 'nest', 'omit', 'pulse', 'quill', 'ridge', 'shade', 'trick', 'uncle', 'vivid', 'whale', 'yearn', 'zone', 'basic', 'bloom', 'crack', 'drift', 'echo', 'flow', 'glide', 'haunt', 'iris', 'jest', 'knife', 'layer', 'march', 'narrow', 'olive', 'point', 'quack', 'roast', 'shell', 'tangle', 'usher', 'verse', 'willow', 'yield', 'zest', 'actor', 'beach', 'cliff', 'dawn', 'ember', 'frost', 'glow', 'hoist', 'ice', 'joke', 'kneel', 'lever', 'mellow', 'nod', 'orbit', 'prize', 'quake', 'rinse', 'shift', 'table', 'upper', 'vine', 'whisper', 'yawn', 'zest', 'anchor', 'blade', 'cloud', 'damp', 'eager', 'flame', 'grow', 'heal', 'ivy', 'jolt', 'knob', 'ladder', 'meadow', 'nest', 'orange', 'pebble', 'quiet', 'rise', 'slope', 'tether', 'urge', 'vast', 'whale', 'yelp', 'zinc', 'attic', 'blaze', 'creek', 'dusk', 'elder', 'flick', 'gleam', 'hurl', 'itch', 'join', 'knob', 'lane', 'mist', 'nap', 'oval', 'patch', 'quip', 'rebel', 'sleek', 'twist', 'union', 'voice', 'wave', 'young', 'zest', 'axis', 'bloom', 'crane', 'dodge', 'eagle', 'flare', 'grind', 'haste', 'ivory', 'jinx', 'knock', 'latch', 'moss', 'newt', 'oak', 'perch', 'quick', 'rush', 'shine', 'temple', 'utter', 'vision', 'warp', 'yawn', 'zigzag', 'amber', 'brisk', 'coral', 'drift', 'elm', 'flight', 'glance', 'hedge', 'iris', 'jolly', 'kneel', 'ladder', 'march', 'net', 'orbit', 'pine', 'quest', 'reed', 'slide', 'twine', 'uplift', 'vessel', 'wade', 'yoke', 'zest', 'apron', 'bliss', 'creek', 'dance', 'elder', 'flame', 'grape', 'huddle', 'iron', 'jinx', 'knit', 'lake', 'mist', 'nap', 'oyster', 'pond', 'quail', 'rake', 'shiver', 'throne', 'undo', 'vault', 'wilt', 'yarn', 'zone', 'arid', 'blunt', 'cave', 'ditch', 'elm', 'frill', 'gust', 'hinge', 'ivy', 'jet', 'knead', 'lever', 'mole', 'nut', 'oak', 'peak', 'quirk', 'reed', 'sway', 'trunk', 'usher', 'vivid', 'wave', 'yonder', 'zebra', 'acid', 'blink', 'chest', 'dusk', 'ember', 'fable', 'gale', 'hoot', 'idle', 'jolt', 'knit', 'layer', 'mint', 'nest', 'oven', 'port', 'quack', 'ring', 'silk', 'timber', 'usher', 'vale', 'wild', 'yell', 'zest', 'alien', 'bloom', 'crest', 'dip', 'epic', 'fern', 'globe', 'harp', 'iris', 'jive', 'knot', 'limb', 'moss', 'note', 'oval', 'page', 'quest', 'ridge', 'stone', 'torch', 'umpire', 'vale', 'willow', 'yawn', 'zeal', 'azure', 'blaze', 'croak', 'dusk', 'ember', 'foam', 'glaze', 'harp', 'icicle', 'jest', 'knob', 'lake', 'melt', 'nest', 'owl', 'poke', 'quill', 'reef', 'sneak', 'thorn', 'urge', 'vapor', 'win', 'yarn', 'zest', 'ache', 'bluff', 'creak', 'delve', 'even', 'frost', 'gale', 'haunt', 'ivy', 'jinx', 'keep', 'latch', 'mist', 'nook', 'olive', 'patch', 'rail', 'slope', 'tribe', 'untie', 'void', 'warp', 'yelp', 'zest', 'amend', 'break', 'cross', 'deal', 'echo', 'fleet', 'grasp', 'herd', 'island', 'jab', 'knack', 'light', 'mind', 'nut', 'oak', 'plank', 'quest', 'ridge', 'sling', 'toil', 'unveil', 'vanish', 'weep', 'yawn', 'zest', 'arch', 'block', 'crush', 'drag', 'elude', 'froth', 'gale', 'hinge', 'isle', 'jog', 'knot', 'lark', 'mole', 'need', 'oat', 'pearl', 'quake', 'roast', 'shush', 'thump', 'untie', 'veil', 'wash', 'yarn', 'zest', 'acute', 'blunt', 'craft', 'drift', 'equip', 'flash', 'glint', 'hunt', 'iris', 'jolt', 'kneel', 'loaf', 'moss', 'note', 'oven', 'perk', 'quiet', 'roam', 'snap', 'tangle', 'utter', 'vice', 'wipe', 'yearn', 'zephyr'];
        this.symbolWordBank = ['.', ',', '?', "'", '!', '/', '(', ')', '&', ':', ';', '=', '+', '-', '_', '"', '$', '@'];
        this.wordBank = this.letterWordBank;
        
        // Current word and letter index
        this.currentWord = '';
        this.currentLetterIndex = 0;

        // Text objects
        this.wordText = this.add.text(400, 300, '', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        this.hintText = this.add.text(400, 350, '', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);
        this.inputText = this.add.text(400, 400, '', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);

        // Timer for hint
        this.hintTimer = null;

        // Input variables
        this.spacebarDownTime = 0;
        this.currentInput = '';

        // Start the game
        this.newWord();

        // Input listeners
        this.input.keyboard.on('keydown-SPACE', this.onSpaceDown, this);
        this.input.keyboard.on('keyup-SPACE', this.onSpaceUp, this);
        this.input.keyboard.on('keydown-PERIOD', this.onDotDown, this);
        this.input.keyboard.on('keydown-MINUS', this.onDashDown, this);

        // New input listeners for L, N, and S keys
        this.input.keyboard.on('keydown-L', () => this.changeWordBank('letter'), this);
        this.input.keyboard.on('keydown-N', () => this.changeWordBank('number'), this);
        this.input.keyboard.on('keydown-S', () => this.changeWordBank('symbol'), this);

        // Touch/click input
        this.input.on('pointerdown', this.handlePointerDown, this);
        this.input.on('pointerup', this.handlePointerUp, this);

        // Add '?' button
        this.helpButton = this.add.text(20, 20, '?', { fontSize: '32px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', this.showControls, this);

        // Create controls overlay (initially hidden)
        this.controlsOverlay = this.add.container(400, 300).setAlpha(0);
        const overlayBg = this.add.rectangle(0, 0, 700, 500, 0x000000, 0.8);
        const controlsText = this.add.text(0, 0,
            'Morse code trainer\ncontrols:\n\n' +
            'Keyboard:\n' +
            'L = Letters\n' +
            'N = Numbers\n' +
            'S = Symbols\n' +
            '. = dot\n' +
            '- = dash\n' +
            '0.01-0.20 second spacebar hold = dot\n' +
            '0.21-0.40 second spacebar hold = dash\n' +
            'bottom left quadrant left click = dot\n' +
            'bottom right quadrant left click = dash\n' +
            'top left and right quadrant 0.01-0.20 second left click = dot\n' +
            'top left and right quadrant 0.21-0.40 second left click = dash\n\n' +
            'Touchscreen:\n' +
            'bottom left quadrant tap = dot\n' +
            'bottom right quadrant tap = dash\n' +
            'top left and right quadrant 0.01-0.20 second tap = dot\n' +
            'top left and right quadrant 0.21-0.40 second tap = dash',
            { fontSize: '16px', fill: '#fff', align: 'center' }
        ).setOrigin(0.5);
        this.controlsOverlay.add([overlayBg, controlsText]);

        // Add close button to controls overlay
        const closeButton = this.add.text(320, -220, 'X', { fontSize: '24px', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', this.hideControls, this);
        this.controlsOverlay.add(closeButton);
    }

    showControls() {
        this.controlsOverlay.setAlpha(1);
    }

    hideControls() {
        this.controlsOverlay.setAlpha(0);
    }

    handlePointerDown(pointer) {
        const { x, y } = pointer;
        const { width, height } = this.sys.game.config;

        if (y > height / 2) {
            if (x < width / 2) {
                this.onDotDown();
            } else {
                this.onDashDown();
            }
        } else {
            this.onSpaceDown();
        }
    }

    handlePointerUp(pointer) {
        const { y } = pointer;
        const { height } = this.sys.game.config;

        if (y <= height / 2) {
            this.onSpaceUp();
        }
    }

    changeWordBank(type) {
        switch(type) {
            case 'letter':
                this.wordBank = this.letterWordBank;
                break;
            case 'number':
                this.wordBank = Array.from({length: 1001}, (_, i) => i.toString());
                break;
            case 'symbol':
                this.wordBank = this.symbolWordBank;
                break;
        }
        this.newWord();
    }

    newWord ()
    {
        this.currentWord = Phaser.Math.RND.pick(this.wordBank);
        this.currentLetterIndex = 0;
        this.updateWordDisplay();
        this.resetHint();
        this.currentInput = '';
        this.inputText.setText('');
    }

    updateWordDisplay ()
    {
        let displayText = '';
        for (let i = 0; i < this.currentWord.length; i++) {
            if (i === this.currentLetterIndex) {
                displayText += `[${this.currentWord[i].toUpperCase()}]`;
            } else {
                displayText += this.currentWord[i];
            }
        }
        this.wordText.setText(displayText);
    }

    resetHint ()
    {
        if (this.hintTimer) this.hintTimer.remove();
        this.hintTimer = this.time.delayedCall(4000, this.showHint, [], this);
        this.hintText.setText('');
    }

    showHint ()
    {
        if (this.currentWord && this.currentLetterIndex < this.currentWord.length) {
            const morseCode = this.letterToMorse(this.currentWord[this.currentLetterIndex]);
            this.hintText.setText(`Hint: ${morseCode}`);
        } else {
            this.hintText.setText('');
        }
    }

    onSpaceDown ()
    {
        this.spacebarDownTime = this.time.now;
    }

    onSpaceUp ()
    {
        const duration = this.time.now - this.spacebarDownTime;
        if (duration >= 10 && duration <= 200) {
            this.currentInput += '.';
        } else if (duration >= 210 && duration <= 400) {
            this.currentInput += '-';
        }
        this.inputText.setText(this.currentInput);
        this.checkInput();
    }

    onDotDown ()
    {
        this.currentInput += '.';
        this.inputText.setText(this.currentInput);
        this.checkInput();
    }

    onDashDown ()
    {
        this.currentInput += '-';
        this.inputText.setText(this.currentInput);
        this.checkInput();
    }

    checkInput ()
    {
        if (this.currentWord && this.currentLetterIndex < this.currentWord.length) {
            const correctMorse = this.letterToMorse(this.currentWord[this.currentLetterIndex]);
            if (this.currentInput === correctMorse) {
                this.currentLetterIndex++;
                this.currentInput = '';
                this.inputText.setText('');
                this.resetHint();
                if (this.currentLetterIndex >= this.currentWord.length) {
                    this.time.delayedCall(500, this.newWord, [], this);
                } else {
                    this.updateWordDisplay();
                }
            } else if (this.currentInput.length >= correctMorse.length) {
                this.shakeText(this.wordText);
                this.currentInput = '';
                this.inputText.setText('');
            }
        }
    }

    shakeText (text)
    {
        this.tweens.add({
            targets: text,
            x: text.x + 10,
            duration: 50,
            yoyo: true,
            repeat: 3
        });
    }

    letterToMorse (letter)
    {
        if (!letter) return '';
        const morseCode = {
            'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
            'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
            'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', '0': '-----', '1': '.----',
            'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', '2': '..---',
            'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '3': '...--',
            '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
            '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
            '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
            ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
            '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
        };
        return morseCode[letter.toLowerCase()] || '';
    }

    update ()
    {
        // Update logic here
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'renderDiv',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 800,
    height: 600,
    scene: Example
};

window.phaserGame = new Phaser.Game(config);