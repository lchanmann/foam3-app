foam.POM({
  name: 'foam3-app',
  version: 1,
  projects: [
    { name: 'foam3/pom' },
    { name: 'foam3/src/foam/support/pom' },
    { name: 'app/src/pom' }
  ],
  foobar: {
    protected: ['foam3', 'app'],
    generate: ['js', 'java'],
    build: {
      objectDir: 'build',
      javaOutDir: 'build/src/java',
    },
    target: {
      runDir: 'runtime'
    }
  }
});