provider "aws" {
  profile = "default"
  region = "us-east-2"
}

resource "aws_instance" "ls-lab3-terraform-1" {
  ami = "ami-0fb653ca2d3203ac1"
  instance_type = "t2.micro"
  key_name = "LS3"
  vpc_security_group_ids = ["sg-05a6e7236cefff274"]

  tags = {
    Name = "Ubuntu"
  }
}

resource "aws_instance" "ls-lab3-terraform-2" {
  ami = "ami-086c1d77a774201ee"
  instance_type = "t2.micro"
  key_name = "LS3"
  vpc_security_group_ids = ["sg-05a6e7236cefff274"]

  tags = {
    Name = "Fedora"
  }
}
