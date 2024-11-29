output "instance_1_public_ip" {
  value = aws_instance.ecs_instance_1.public_ip
}

output "instance_2_public_ip" {
  value = aws_instance.ecs_instance_2.public_ip
}

output "api_gateway_url" {
  value = aws_api_gateway_deployment.api_deployment.invoke_url
}
