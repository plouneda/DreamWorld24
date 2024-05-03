import unittest
from dreamworld import DreamEnvironment, DreamCreation

class TestDreamCreation(unittest.TestCase):
    def setUp(self):
        self.dream = DreamCreation()

    def test_create_dream(self):
        self.assertTrue(self.dream.create_dream())

    def test_failed_dream_creation(self):
        self.assertFalse(self.dream.create_dream())

class TestDreamEnvironment(unittest.TestCase):
    def setUp(self):
        self.environment = DreamEnvironment()

    def test_environment_creation(self):
        self.assertTrue(self.environment.create_environment())

if __name__ == '__main__':
    unittest.main()
