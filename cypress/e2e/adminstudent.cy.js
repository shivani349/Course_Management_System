describe('Admin Dashboard - LocalStorage Tests', () => {
  const student = {
    id: 1,
    name: 'Test Student',
    mobile: '9999999999',
    course: 'CS',
    batch: 'B1',
    grade: 'A',
    fee: 'Paid'
  };

  beforeEach(() => {
    cy.visit('adminstudent.html');
    // Clear localStorage before each test to ensure test isolation
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it('Should store student data in localStorage', () => {
    cy.window().then((win) => {
      const students = [student];
      win.localStorage.setItem('studentsList', JSON.stringify(students));
    });

    cy.reload(); // simulate fresh page load

    cy.window().then((win) => {
      const stored = JSON.parse(win.localStorage.getItem('studentsList'));
      expect(stored).to.have.length(1);
      expect(stored[0].name).to.equal('Test Student');
    });
  });

  it('Should update student in localStorage', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('studentsList', JSON.stringify([student]));
    });

    cy.reload();

    cy.window().then((win) => {
      let students = JSON.parse(win.localStorage.getItem('studentsList'));
      students[0].grade = 'B+';
      win.localStorage.setItem('studentsList', JSON.stringify(students));
    });

    cy.reload();

    cy.window().then((win) => {
      const updated = JSON.parse(win.localStorage.getItem('studentsList'));
      expect(updated[0].grade).to.equal('B+');
    });
  });

  it('Should delete student from localStorage', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('studentsList', JSON.stringify([student]));
    });

    cy.reload();

    cy.window().then((win) => {
      win.localStorage.setItem('studentsList', JSON.stringify([]));
    });

    cy.reload();

    cy.window().then((win) => {
      const list = JSON.parse(win.localStorage.getItem('studentsList'));
      expect(list).to.be.an('array').that.is.empty;
    });
  });
});
