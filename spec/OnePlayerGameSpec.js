(function() {
  'use strict';
  describe('OnePlayerGame', function() {
    var OnePlayerGame = OnePlayerGameFile.OnePlayerGame;
    var onePlayerGame;
    var frame1;

    beforeEach(function() {
      onePlayerGame = new OnePlayerGame();
      frame1 = onePlayerGame.frame1;
    });

    it('has a method "roll"', function() {
      expect(onePlayerGame.roll()).toBe(1);
    });

    describe('roll', function() {
      it('results in call of processRoll on frame1', function() {
	spyOn(frame1, 'processRoll').and.returnValue(true);
	onePlayerGame.roll(10);
	expect(frame1.processRoll).toHaveBeenCalled();
      });
    });
	
	
      
  });
}());