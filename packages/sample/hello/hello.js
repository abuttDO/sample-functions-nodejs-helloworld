function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greet)
    return {"body": greet}
  }

exports.main = main
