void main() => runApp(MyApp());

import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Awais Trading Bot')),
        body: Center(child: Text('Welcome to Awais Bot!')),
      ),
    );
  }
}